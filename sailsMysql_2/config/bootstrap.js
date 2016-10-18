module.exports.bootstrap = function(cb) {
  U4bi.create({name: '명재'}).exec(console.log);
  U4bi.create({name: '명돌'}).exec(console.log);
  U4bi.create({name: '명삼'}).exec(console.log);
  U4bi.create({name: '명훈'}).exec(console.log);
  U4bi.create({name: '명한'}).exec(console.log);
  cb();
};
