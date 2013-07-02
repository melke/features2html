// DEFAULT SETTINGS
var FILE_ENCODING = 'utf-8';
var INPUTDIR = 'examples/features';
var TEMPLATESDIR = 'default/templates';
var OUTPUTDIR = 'output';
var LANGUAGE = 'en';
var DOCTEMPLATE, FEATURETEMPLATE;

// MODULES
var _commander = require('commander'),
  _fs = require('fs'),
  _handlebars = require('handlebars'),
  _linereader = require('line-reader'),
  i18n = require('i18next');

// options
_commander
  .version('0.1')
  .option('-i, --input-dir [path]', 'read feature files from path (default: examples/features)')
  .option('-t, --templates-dir [path]', 'read the files doc_template.html, feature_template.html and style.css from path (default: default/templates)')
  .option('-o, --output-dir [path]', 'send output to folder path (default: output)')
  .option('-l, --lang [en|sv]', 'language used in feature files (default: en)');


// commands
_commander
  .command('create')
  .description('Create html from feature files')
  .action(createCommand);

// Check if called without command
if (process.argv.length < 3) {
  _commander.help();
}

// parse commands
_commander.parse(process.argv);

function setup(done) {
  INPUTDIR = _commander.inputDir || INPUTDIR;
  TEMPLATESDIR = _commander.templatesDir || TEMPLATESDIR;
  OUTPUTDIR = _commander.outputDir || OUTPUTDIR;
  LANGUAGE = _commander.lang || LANGUAGE;
  //console.log('-i = %s, -t = %s, -o = %s, -l = %s', INPUTDIR, TEMPLATESDIR, OUTPUTDIR, LANGUAGE);
  DOCTEMPLATE = TEMPLATESDIR + '/doc_template.html';
  FEATURETEMPLATE = TEMPLATESDIR + '/feature_template.html';
  i18n.init({ lng: LANGUAGE}, function(t) {
    done();
  });
}

function createCommand() {
  setup(create);
}

function create(){
  var docHandlebarTemplate = _handlebars.compile(_fs.readFileSync(DOCTEMPLATE, FILE_ENCODING));
  var featureHandlebarTemplate = _handlebars.compile(_fs.readFileSync(FEATURETEMPLATE, FILE_ENCODING));
  var cssStyles = _fs.readFileSync(TEMPLATESDIR + '/style.css', FILE_ENCODING);

  console.log("lang = %s", i18n.lng());
  console.log("background = %s", i18n.t("background"));

//  parseFeatures(function(features) {
//
//    var featuresHtml = '';
//    for (var i = 0; i < features.length; i++) {
//      featuresHtml += featureHandlebarTemplate(features[i]);
//    }
//    var docData = new Object();
//    docData.cssStyles = cssStyles;
//    docData.featuresHtml = featuresHtml;
//    var docHtml = docHandlebarTemplate(docData);
//
//    _fs.mkdir(OUTPUTDIR,function(e){
//      if(!e || (e && e.code === 'EEXIST')){
//        _fs.writeFileSync(OUTPUTDIR + '/features.html', docHtml, FILE_ENCODING);
//        console.log('Done');
//      } else {
//        console.log(e);
//      }
//    });
//
//  });


}

function parseFeatures(callback) {

  parseFeatureFile(INPUTDIR + '/menyer_och_navigering.feature', function(feature) {
     // use async
  });
}

function parseFeatureFile(featureFilename, callback) {
  var feature = new Object();
  feature.name = 'Example feature';
  feature.background = 'Feature background';
  feature.scenarios = [ {sidenote: 'Side note 1', content: 'Content 1'}, {sidenote: 'Side note 1', content: 'Content 1'} ];

  _linereader.eachLine(featureFilename, function(line) {
    if (line.contains(':')) {

    }
  }).then(function () {
      console.log("line-reader done!!");
      callback(feature);
  });

}

