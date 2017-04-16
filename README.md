## What is features2html?

features2html is a simple script that **creates HTML based documentation from Cucumber features**. The resulting layout
is also suitable for printing as PDF from your favorite web browser.

Note that the documentation is **generated from the source Cucumber feature files, and NOT from the test results** (there
are plenty of other tools that can do that).

Use features2html when you want to **create a nice looking requirements specification**, that you can email to your customer.
You can focus on editing the actual feature files and let features2html make the features presentable to your customers.

---

## Installation

* Make sure you have node.js installed on the computer where you intend to run the script.
* Clone or [download](https://github.com/melke/features2html/archive/master.zip) the code.

---

## Usage

### Demo usage

To get the feel of it, run the script without any options. This will create a sample HTML file in the subfolder `output_features2html`,
from the example feature sources in `examples/features`, using the templates and css styles in `default/templates`:

```
node features2html.js create
```

### Real world usage

Have a look at the switches available:

```
-h, --help                        output usage information
-V, --version                     output the version number
-i, --input-dir [path]            read feature files from path (default: examples/features)
-t, --templates-dir [path]        read the files doc_template.html, feature_template.html and style.css from path (default: default/templates)
-o, --output-file [path]          send output to file path (default: output_features2html/feature_YYYYMMDD_HHmm.html)
-p, --product-name [string]       The name of your product used in headline and header (default: My Product Name)
-a, --author [string]             The author name used in header (default: John Doe)
-b, --break-before-word [string]  create a line break before every occurrence of this word in the background (default: null)
-l, --lang [en|sv]                language used in feature files (default: en)

```

What you normally want to do is:
* Copy the three files in `default/templates` (two template files and one css file) to another folder anywhere on your computer.
* Modify the templates and styles according to your demands. If you are happy with the demo design, all you have
to do is modify the Lorem Ipsum intro text in the template file doc_template.html.
* Use switches to point to your folders for templates and features.

Example:

```
node features2html.js -i path-to-your-feature-file-folder -t path-to-your-modified-templates-folder -a "Your Name" -p "Your Product Name" create
```

---

## Things to note

* All feature files in the input folder will be processed in alphabetical order. If you want specific ordering of your features in the
output, I suggest that you rename your feature files with number prefixes, like 100_featurename.feature 110_featurename.feature etc.
* The feature files folder will not be processed recursively.
* You can add a special comment before any of your scenarios, `#sidenote:` followed by your sidenote comment. In the default design, these comments
will be rendered to the right of the scenario (see example features in `examples/features`.

---

## Feedback and Contribution

All feedback and contribution is very appreciated. Please send pull requests or just send an email to [mats@melke.nu](mailto:mats@melke.nu).
Maybe you can send a pull request with the Cucumber keywords for your language? See example for english in [locales/en/translation.json](locales/en/translation.json)

---

## Licensing

feature2html is licensed under MIT License
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---

[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/b256c1be9c2280083d034b0fd553204c "githalytics.com")](http://githalytics.com/melke/features2html)
