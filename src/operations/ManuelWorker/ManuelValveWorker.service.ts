import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SensorCards } from 'src/model/WorkGroup/Sensors/sensorCards.entity';
import { WorkGroup } from 'src/model/WorkGroup/workGroup.entity';
import { GatewayDTO } from 'src/units/gateway/gateway.dto';
import { GatewayService } from 'src/units/gateway/gateway.service';
import { GatewayLogsService } from 'src/units/gateway/gatewayLogs/gatewayLogs.service';
import { SensorCalibrationLogsService } from 'src/units/workGroup/sensors/sensorCalibrationLogs/sensorCalibrationLog.service';
import { SensorCardLogsService } from 'src/units/workGroup/sensors/sensorCardLogs/sensorCardLogs.service';
import { SensorCardParamsService } from 'src/units/workGroup/sensors/sensorCardParams/sensorCardParams.service';
import { SensorCardsDTO } from 'src/units/workGroup/sensors/sensorCards/sensorCards.dto';
import { SensorCardsService } from 'src/units/workGroup/sensors/sensorCards/sensorCards.service';
import { SensorMoistureLogService } from 'src/units/workGroup/sensors/sensorMoistureLogs/sensorMoistureLog.service';
import { WorkGroupDTO } from 'src/units/workGroup/workGroup/workGroup.dto';
import { WorkGroupService } from 'src/units/workGroup/workGroup/workGroup.service';
import { WorkGroupLogsService } from 'src/units/workGroup/workGroupLogs/workGroupsLog.service';
import { Repository } from 'typeorm';
import { SendMailService } from '../mailer/mailer.service';

@Injectable()
export class ManuelValveWorkerService {
  constructor(
    private readonly gatewayService: GatewayService,
    private readonly gatewayLogService: GatewayLogsService,
    private readonly sensorCardService: SensorCardsService,
    private readonly workGroupService: WorkGroupService,
    private readonly workGroupLogService: WorkGroupLogsService,
    private readonly sensorMoistureLogService: SensorMoistureLogService,
    private readonly sensorCalibrationLogService: SensorCalibrationLogsService,
    private readonly sensorCardParamsService: SensorCardParamsService,
    private readonly sensorLogService: SensorCardLogsService,
    private readonly mailerService: SendMailService,
  ) {}

  // GATEWAYLERE BA??LANIRKEN WORKER VEYA CONNECTTOGATEWAYANDPROCESS ????ER??S??NDE FONKS??YONLARI B??RB??R??NE BA??LA!

  // --------------------------------------------- KR??T??K NOKTALARDA MA??L G??NDERMEY?? UNUTMA !!!!!!!! ----------------------------

  public async Worker() {
    // Gateway ba??lant?? ad??m??
    await this.connectToGatewayAndProcess();
  }

  public async process(processNumber: Number) {
    switch (processNumber) {
      case 1:
        this.connectToGatewayAndProcess();
        break;

      default:
        break;
    }
  }

  public async connectToGatewayAndProcess() {
    try {
      const gateways = await this.gatewayService.getAll();

      gateways.forEach(async (element) => {
        //connect to gateway for each a element on this lines
        this.readDateAndTime(
          element.contentId,
          element.ServerIP,
          element.ServerPort,
          element,
        );
        this.readMoisture(
          element.contentId,
          element.ServerIP,
          element.ServerPort,
          element,
        );
      });
    } catch (error) {
      return false;
    }
  }

  // TAR??H VE ZAMAN OKUNDUKTAN SONRA DB'DE KAYITLI OLAN TAR??H VE ZAMAN ARALI??INDA ??SE (T??MER LI Y??NETIMDE GE??ERLI)
  // ??ALI??MA ZAMAN ARALI??INDADIR D??Y??P B??LG?? LOGU ATMALI
  public async readDateAndTime(
    contentId: string,
    serverIP: string,
    port: string,
    gateways: GatewayDTO,
  ) {
    try {
      //get request for date and time by gateway
      //after go typeorm and update target gateways 'updatedAt' property
      // okunan tarih updatedAt, huba g??nderilen tarih lastChangedAt ' e yaz??l??r
      // ??uan karta ba??l?? olmad??????m??z i??in ??uan??n tarihini yaz??yoruz.
      gateways.updatedAt = new Date();
      var sensorCards = Array<SensorCardsDTO>();

      const workGroups = await this.workGroupService.getByGateway(
        gateways.contentId,
      );

      //return false;

      workGroups.forEach(async (element) => {
        if (element.WorkType === 'Manuel') {
          // burada e??er manuel ise saat tarih okumak i??in karta ba??lan??p i??lemleri yapaca????z.
          // karta ba??lant??m??z olmad?????? i??in varsay??msal olarak kodluyoruz.
          const updated = await this.gatewayService.update(contentId, gateways);
          if (updated) {
            this.gatewayLogService.create({
              GatewayID: contentId,
              LogContent: `${contentId}'li ${gateways.Name}'li Gateway Tarih Saat Okuma ????lemi Ba??ar??l??!`,
              LogDescription: `${gateways.Name} Ba??lant?? Sa??land?? ve Tarih Saat Okundu`,
              LogTitle: `${gateways.Name} Rutin ????lemler`,
              LogStatus: 'Success',
              contentId: '',
              createdAt: new Date(),
              isDeleted: false,
              lastChangedDateTime: new Date(),
              updatedAt: new Date(),
            });
            return true;
          }
          this.gatewayLogService.create({
            GatewayID: contentId,
            LogContent: `${contentId}'li ${gateways.Name}'li Gateway Tarih Saat Okuma ????lemi Ba??ar??s??z!`,
            LogDescription: `${gateways.Name} Tarih ve Saat Okuma ????lemi Ba??ar??s??z.`,
            LogTitle: `${gateways.Name} Rutin ????lemler`,
            LogStatus: 'Failed',
            contentId: '',
            createdAt: new Date(),
            isDeleted: false,
            lastChangedDateTime: new Date(),
            updatedAt: new Date(),
          });
          return false;
        }
        this.workGroupLogService.create({
          WorkGroupID: element.contentId,
          LogContent: `${contentId}'li ${element.Name}'li Sulama Grubu Manuel Y??netime G??re De??il!`,
          LogDescription: `${element.Name} Ba??lant?? Sa??land??`,
          LogTitle: `${element.Name} Rutin ????lemler`,
          LogStatus: 'Success',
          contentId: '',
          createdAt: new Date(),
          isDeleted: false,
          lastChangedDateTime: new Date(),
          updatedAt: new Date(),
        });
        return false;
      });
    } catch (error) {
      this.gatewayLogService.create({
        GatewayID: contentId,
        LogContent: `${contentId}'li ${gateways.Name}'li Gateway Tarih Saat Okuma ????lemi Ba??ar??s??z!`,
        LogDescription: `${gateways.Name} Gateway hata i??eri??i => ${error}`,
        LogTitle: `${gateways.Name} Rutin ????lemler`,
        LogStatus: 'Failed',
        contentId: '',
        createdAt: new Date(),
        isDeleted: false,
        lastChangedDateTime: new Date(),
        updatedAt: new Date(),
      });
      return false;
    }
  }

  // NEM VER??S?? GELD??KTEN SONRA E??ER T??MERDAYSA NEM VER??S??NE GEREK YOK ????NK?? ??ALISMA PLANI BELL??
  // FAKAT SENS??RE G??RE VEYA NEM SEV??YES?? VS G??RE Y??NET??M VARSA VE BEL??RL?? NEM ARALI??INDANA A??A??IDA
  // NEM SEV??YES?? D??????K ??SE BEL??RL?? ARAYA GELENE KADAR BEL??RT??LEN ZAMAN ????ER??S??NDE ??ALI??MASI GEREK??YOR
  public async readMoisture(
    contentId: string,
    serverIP: string,
    port: string,
    gateways: GatewayDTO,
  ) {
    //get request for sensor moisture by gateway
    let workGroups = Array<WorkGroupDTO>();
    var sensorCards = Array<SensorCardsDTO>();
    workGroups = await this.workGroupService.getByGateway(contentId);
    // KART BA??LANTIMIZ OLMADI??I ??????N KOD YAPISINI OLU??TURMAK ADINA TUTTU??UM MOCK DATA T??P??NDE DE??????KENLER
    var previousMoistureData = 54500;
    var nextMoistureData = 65000;
    // ------------------------------------------------------------------------------------------------

    workGroups.forEach(async (element) => {
      if (element.WorkType === 'Manuel') {
        sensorCards = await this.sensorCardService.getByWorkGroup(
          element.contentId,
        );
        sensorCards.forEach(async (sensorCard) => {
          const sensorCardParams =
            await this.sensorCardParamsService.getBySensorCard(
              sensorCard.contentId,
            );
          if (sensorCardParams[0].ManagementType === 'MANUEL') {
            try {
              //get request for data
              //d??nen her bir sens??r ile, herbir sens??r nem verisini ilgili yerlere yaz
              // daha sonra d??nen veriye g??re ortalama al??p moisture log tablosuna yaz
              // BURASI SADECE NEM OKUMA ????LEM?? ??????ND??R. KAL??BRASYON ZAMANI CAL??BRAT??ON LOG TABLOSUNA YAZILIR!!!!!!!!!
              // SENSORDATAS VE SENSORS PROPERTYLER??NE VER?? YAZILDIKTAN SONRA (KALIBRASYON SEKLINE GORE ORTALAMA ALINDIKTAN SONRA)
              // SENSOR LOG ENT??TYS??NE LOGBASE ENT??TY ?? ENJTEKE ET
              const create = this.sensorMoistureLogService.create({
                ContentId: '',
                createdAt: new Date(),
                GetDataAt: new Date(),
                isDeleted: false,
                lastChangedDateTime: new Date(),
                SensorCardID: sensorCard.contentId,
                SensorDatas: [''],
                Sensors: [''],
                SensorDatasAverage: '', // B??t??n sens??rlerin ortalamas??,
                updatedAt: new Date(),
              });

              if (create) {
                this.sensorLogService.create({
                  SensorCardID: contentId,
                  contentId: '',
                  LogContent: `${gateways.contentId}'li ${gateways.Name}'li Gateway'e ait ${sensorCard.Name} isimli sens??rden nem verisi ba??ar??yla okundu!`,
                  LogDescription: `${gateways.contentId}'li ${gateways.Name}'li Gateway'e ait ${sensorCard.Name} isimli sens??rde nem okundu`,
                  LogTitle: `${gateways.Name} Rutin ????lemler`,
                  LogStatus: 'Success',
                  createdAt: new Date(),
                  isDeleted: false,
                  lastChangedDateTime: new Date(),
                  updatedAt: new Date(),
                });

                // E??ER SULAMA YAPILMASI GEREKEN NEM SEV??YES??NDEYSE YAPILMASI GEREKEN ????LEM
                if (previousMoistureData < nextMoistureData) {
                  // SULAMA YAPTIRMAK ??????N GEREKL?? KOD BLOKLARI
                  // VE DAHA SONRA LOG ATILIR
                  // SMS G??NDERME
                  // MA??L G??NDERME
                  // WHATSAPP MESAJ G??NDERME
                  this.sensorLogService.create({
                    SensorCardID: contentId,
                    contentId: '',
                    LogContent: `${gateways.contentId}'li ${gateways.Name}'li Gateway'e ait ${sensorCard.Name} isimli sens??r sulama nem seviyesinde, sulama yap??l??yor`,
                    LogDescription: `${gateways.contentId}'li ${gateways.Name}'li Gateway'e ait ${sensorCard.Name} isimli sens??rde ??al????ma aral??????ndad??r.`,
                    LogTitle: `${gateways.Name} Rutin ????lemler`,
                    LogStatus: 'Success',
                    createdAt: new Date(),
                    isDeleted: false,
                    lastChangedDateTime: new Date(),
                    updatedAt: new Date(),
                  });
                  this.workGroupLogService.create({
                    WorkGroupID: element.contentId,
                    LogContent: `${contentId}'li ${element.Name}'li Sulama Grubunda ${sensorCard.Name} isimli sens??r b??lgesinde sulama yap??l??yor!`,
                    LogDescription: `${element.Name} Nem ??al????ma Aral??????ndad??r.`,
                    LogTitle: `${element.Name} Rutin ????lemler`,
                    LogStatus: 'Success',
                    contentId: '',
                    createdAt: new Date(),
                    isDeleted: false,
                    lastChangedDateTime: new Date(),
                    updatedAt: new Date(),
                  });
                  return true;
                } else {
                  this.sensorLogService.create({
                    SensorCardID: contentId,
                    contentId: '',
                    LogContent: `${gateways.contentId}'li ${gateways.Name}'li Gateway'e ait ${sensorCard.Name} isimli sens??r sulama nem seviyesine ula??mad??!`,
                    LogDescription: `${gateways.contentId}'li ${gateways.Name}'li Gateway'e ait ${sensorCard.Name} isimli sens??rde nem seviyesi stabil.`,
                    LogTitle: `${gateways.Name} Rutin ????lemler`,
                    LogStatus: 'Success',
                    createdAt: new Date(),
                    isDeleted: false,
                    lastChangedDateTime: new Date(),
                    updatedAt: new Date(),
                  });
                  this.workGroupLogService.create({
                    WorkGroupID: element.contentId,
                    LogContent: `${contentId}'li ${element.Name}'li Sulama Grubunda ${sensorCard.Name} isimli sens??r b??lgesi hen??z gerekli nem seviyesinden yukar??dad??r!`,
                    LogDescription: `${element.Name} Nem ??al????ma Aral??????nda De??ildir.`,
                    LogTitle: `${element.Name} Rutin ????lemler`,
                    LogStatus: 'Success',
                    contentId: '',
                    createdAt: new Date(),
                    isDeleted: false,
                    lastChangedDateTime: new Date(),
                    updatedAt: new Date(),
                  });
                }

                return true;
              }
              this.sensorLogService.create({
                SensorCardID: contentId,
                contentId: '',
                LogContent: `${gateways.contentId}'li ${gateways.Name}'li Gateway'e ait ${sensorCard.Name} isimli sens??rden nem verisi ba??ar??s??z!`,
                LogDescription: `${gateways.contentId}'li ${gateways.Name}'li Gateway'e ait ${sensorCard.Name} isimli sens??rde nem okunamad??`,
                LogTitle: `${gateways.Name} Rutin ????lemler`,
                LogStatus: 'Failed',
                createdAt: new Date(),
                isDeleted: false,
                lastChangedDateTime: new Date(),
                updatedAt: new Date(),
              });
              return false;
            } catch (error) {
              this.sensorLogService.create({
                SensorCardID: contentId,
                contentId: '',
                LogContent: `${gateways.contentId}'li ${gateways.Name}'li Gateway'e ait ${sensorCard.Name} isimli sens??rden nem verisi ba??ar??s??z!`,
                LogDescription: ` ${sensorCard.Name} isimli sens??rde nem okunamad?? hata=> ${error}`,
                LogTitle: `${gateways.Name} Rutin ????lemler`,
                LogStatus: 'Failed',
                createdAt: new Date(),
                isDeleted: false,
                lastChangedDateTime: new Date(),
                updatedAt: new Date(),
              });
              return false;
            }
          }
          this.sensorLogService.create({
            SensorCardID: contentId,
            contentId: '',
            LogContent: `${gateways.contentId}'li ${gateways.Name}'li Gateway'e ait ${sensorCard.Name} isimli sens??r manuel y??netime g??re de??il!`,
            LogDescription: ` ${sensorCard.Name} isimli sens??r manuel y??netime g??re de??il!`,
            LogTitle: `${gateways.Name} Rutin ????lemler`,
            LogStatus: 'Failed',
            createdAt: new Date(),
            isDeleted: false,
            lastChangedDateTime: new Date(),
            updatedAt: new Date(),
          });
          return false;
        });
      }
      this.workGroupLogService.create({
        WorkGroupID: element.contentId,
        LogContent: `${contentId}'li ${element.Name}'li Sulama Grubu Manuel Y??netime G??re De??il!`,
        LogDescription: `${element.Name} Ba??lant?? Sa??land??`,
        LogTitle: `${element.Name} Rutin ????lemler`,
        LogStatus: 'Success',
        contentId: '',
        createdAt: new Date(),
        isDeleted: false,
        lastChangedDateTime: new Date(),
        updatedAt: new Date(),
      });
      return false;
    });
  }

  public async sendData(
    contentId: string,
    serverIP: string,
    port: string,
    command: string,
  ) {
    try {
      // SERVER IP VE PORTU BELL?? OLAN GATEWAY'E KOMUTU G??NDER,
      // DURUMA G??RE D??N?????? SA??LA
      return true;
    } catch (error) {
      return false;
    }
  }

  public async recieveData() {}
}
