/**
 * Default model configuration
 * (sails.config.models)
 *
 * Unless you override them, the following properties will be included
 * in each of your models.
 *
 * For more info on Sails models, see:
 * http://sailsjs.org/#!/documentation/concepts/ORM
 */

module.exports.models = {

  /***************************************************************************
  *                                                                          *
  * Your app's default connection. i.e. the name of one of your app's        *
  * connections (see `config/connections.js`)                                *
  *                                                                          *
  ***************************************************************************/
  connection: 'localDiskDb',

  /***************************************************************************
  *                                                                          *
  * How and whether Sails will attempt to automatically rebuild the          *
  * tables/collections/etc. in your schema.                                  *
  *                                                                          *
  * See http://sailsjs.org/#!/documentation/concepts/ORM/model-settings.html  *
  *                                                                          *
  ***************************************************************************/
  migrate: 'alter'
  /* 실제 sails 프로젝트를 가동할 시에 데이터베이스 migration 됨.
    migrate 옵션 총 3가지임.
      safe  : 마이그레이션 하지 않음. 사용자가 직접 디비를 수정해야 함.
      alter : 기존에 생성된 데이터는 두고 sails에서 자동으로 마이그레이션(완벽하진 않다함.)
      drop  : 스키마/데이터 모두 삭제하고 다시 생성함.

      ** sails 프로젝트를 운영모드로 가동할 때 safe만 가능.
         개발모드에서는 3가지 모두 사용할 수 있다고 함.

  마이그레이션 [migration] 두산백과 소프트웨어 > 운영체제
  하나의 운영환경으로부터 더 나은 운영환경으로 옮아가는 과정을 뜻하는 정보통신 용어
  */

};
