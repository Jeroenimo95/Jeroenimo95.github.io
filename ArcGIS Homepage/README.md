<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better please fork the repo and create a pull request or simple open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->

[![Build Status][build-shield]](<>)
[![Contributors][contributors-shield]](<>)
[![MIT License][license-shield]](<>)

<!-- PROJECT LOGO -->

<!--
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="logo.png" alt="Logo" width="80" height="80">
  </a>
-->

  <h3 align="center">ArcGIS online Homepage customization</h3>

  <p align="center">
    an overview of possible changes to ArcGIS online Homepage customization!
    <br />
    <a href="https://jeroenimo95.github.io/ArcGIS%20Homepage/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://jeroenimo95.github.io/ArcGIS%20Homepage/example/index.html">View Demo</a>
    ·
    <a href="https://jeroenimo95.github.io/ArcGIS%20Homepage/issues">Report Bug</a>
    ·
    <a href="https://jeroenimo95.github.io/ArcGIS%20Homepage/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

-   [About the Project](#about-the-project)
    -   [Built With](#built-with)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
-   [Usage](#usage)
    -   [Change Logo](#change-logo)
    -   [Change Background](#change-background-images)
    -   [Change / Add Buttons](#Change-/-Add-Buttons)
-   [Contributing](#contributing)
-   [License](#license)
-   [Contact](#contact)
-   [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

[![ArcGIS homepage Screen Shot][product-screenshot]](http://swecono.maps.arcgis.com/home/index.html)
[Live Demo](https://jeroenimo95.github.io/ArcGIS%20Homepage/example/index.html)

ArcGIS online homepage is by default just about functional, but that's it. The homepage needs to be useful for yourself, your users and new visitors. If this is the case the default homepage could be a little confusing for some. This custom layout contributes to those how need more than the default homepage.

Here's why:

-   Your time should be focused on creating something amazing. A project that solves a problem and helps others
-   Your users should be helped by useful links and buttons to quickly access features on the ArcGIS online platform
-   You should be proud of you organizations' homepage

Of course, no one template will serve all homepages since your needs may be different. But this template would be a good starting point from which you can build your own beautiful homepage.

During the internship at Sweco Bergen, I was tasked to look into a simple way to restyle the ArcGIS online homepage. I did some research into the possibilities and came across a very useful blogpost on [GeoNet](https://community.esri.com/blogs/baldy/2017/07/24/beautify-that-homepage-creating-a-unique-look-and-feel). The customized files that are given in this post are the basis on which I build the first version of the homepage. The final customized files can be found in the [src](https://github.com/Jeroenimo95/Jeroenimo95.github.io/tree/master/ArcGIS%20Homepage/src) folder.

A list of commonly used resources that I find helpful are listed in the acknowledgements.

### Built With

This section should list any major frameworks that you built your project using.

-   [HTML](https://www.w3schools.com/whatis/whatis_html.asp)
-   [CSS](https://www.w3schools.com/whatis/whatis_css.asp)
-   [ArcGIS online](http://swecono.maps.arcgis.com/home/index.html)

<!-- GETTING STARTED -->

## Getting Started

This is the walkthrough of how to change or update the existing Sweco ArcGIS online homepage. Before the fun begins, follow the instructions on setting up the development environment for the homepage customization.

### Prerequisites

Choose one of the following code editor programs. Notepad++ can be downloaded from the Software Center on your PC.

-   Notepad ++
-   [Atom](https://atom.io/)

With atom, install the following packages by clicking on the links or directly in the Atom editor:
-   In Atom, open _Setting_ (Preferences on Mac)
-   Go to _Install_ section
-   Search for `package name`. Once found, click `Install` button to install package

Packages
-   [Beautify](https://atom.io/packages/atom-beautify)
-   [Pigments](https://atom.io/packages/pigments)
-   [Linter](https://atom.io/packages/linter)
-   [Linter-csslint](https://atom.io/packages/linter-csslint)
-   [Linter-htmllint](https://atom.io/packages/linter-htmlhint)

Logo:
  - _max-width 960px_
  - _max-height 120px_

Background:
  - _max file size of 1MB_

Buttons:
  - _Company hyperlinks: 230px by 108px_
      - ![company-button][company-button]
  - _ArcGIS online hyperlinks: ratio of 4:3_
      - ![arcgis-button][arcgis-button]
  - _Botton hyperlinks: 150px by 43px_
      - ![bottom-button][bottom-button]
  - _max file size of 500kb_

Filestorage:
  - _ArcGIS online 'homepage' contentfolder_
  - _Github repository_
  - _Internal SharePoint for backup_

Role
-   ArcGIS online _Administrator_ rights to be able to change homepage settings

_**Before continuing please read [this](https://community.esri.com/blogs/baldy/2017/07/24/beautify-that-homepage-creating-a-unique-look-and-feel), because it explains a lot of the basics of the ArcGIS online homepage and its customization**_.

<!--
### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
```sh
git clone https:://github.com/your_username_/Project-Name.git
```
3. Install NPM packages
```sh
npm install
```
4. Enter your API in `config.js`
```JS
const API_KEY = 'ENTER YOUR API';
```
-->

<!-- USAGE EXAMPLES -->

## Usage

There are three important parts of the default ArcGIS online homepage. As in the blogpost, these can also be found in the Sweco ArcGIS online page. 1 is the header, 2 is the content slider and 3 is the organizations description.

![sections-screenshot][sections-screenshot]

#### Change Logo

In the code of the [Banner.html](https://github.com/Jeroenimo95/Jeroenimo95.github.io/tree/master/ArcGIS%20Homepage/src) file, the last two elements you will see in the _style_ section are the #topBanner and #resback. For both of these, you can see that we are simply applying a background image to the DIV and then placing the element. #topBanner is placing the header banner image and #resBack is placing the background image at a fixed position.  

1. Make sure new logo image follows the give size restrictions and storage location
2. Upload the image to a folder and share it with the _Homepage_ Group
2. Make new logo image public, and copy the url at the bottom of the overview page of the logo
![sections-screenshot][share-screenshot]
3. Go to _Organization_, to _Setting_, to _Home Page_ and click the <> icon in the toolbar of the banner section
![banner-screenshot][banner-screenshot]
4. place image url in the 'background' declaration in the _#topBanner_ section
```css
#topBanner {
  background: url(http://);
  border-radius: 0px 0px 10px 10px;
  width: 960px;
  height: 120px;
  repeat: false;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -20px;
  -moz-border-radius: 0 0 10px 10px;
  -webkit-border-radius: 0 0 10px 10px;
  -o-border-radius: 0 0 10px 10px;
}
```
5. Save the changes made to the Banner

#### Change Background images

For the background, there are already four different default Sweco background in the banner html file. To change the background, follow the following steps:

1. add `//` to current `background-image`
2. remove `//` from the desired `background-image`
```css
#resetBack {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  //background-image: url(http://); /* city background */
  background-image: url(http://); /* 3D bridge background */
  //background-image: url(http://); /* highway bridge background */
  //background-image: url(http://); /* map background */
  background-size: cover;
  z-index: 0-100;
}
```
3. Save the changes made to the Background

#### Change / Add Buttons

In future updates, the purpose of the buttons might change. Keep the [size and proportion limitaztions](#prerequisites) of the button images in mind when making changes.

1. Make sure new button image follows the size restrictions and storage location
2. Work with the [html file](https://github.com/Jeroenimo95/Jeroenimo95.github.io/tree/master/ArcGIS%20Homepage/src/OrganizationDescription.html) instead of changing values in the ArcGIS settings editor, which doesn't maintain the markup when saved
3. Upload or update a image on ArcGIS online, share it with the _Homepage_ Group, copy share link and (re)place it in a (new) <img src="http://> link.
```html
<!-- 	This section holds the links to Sweco Norge AS specific content on sweco.no
			<a></a>	places a link to the desired Sweco.no webpage
			<img />	Displays the image desired for the link just defined
-->
<div class="Divisions">
	<p class="groupItems">
		<a class="groupItem" href="https://www.sweco.no/vart-tilbud/bygg-og-konstruksjoner/" target="_blank" title="Bygg og konstruksjoner">
			<img alt="Bygg og konstruksjoner" src="http://swecono.maps.arcgis.com/sharing/rest/content/items/9ef05736e69a4df68b7c03ff87b5404e/data" />
		</a>
		<a class="groupItem" href="https://www.sweco.no/vart-tilbud/energisystemer/" target="_blank" title="Energisystemer">
			<img alt="Energisystemer" src="http://swecono.maps.arcgis.com/sharing/rest/content/items/b09c04ec00fe44c987320c6edd335f26/data" />
		</a>
		<a class="groupItem" href="https://www.sweco.no/vart-tilbud/samferdsel/" target="_blank" title="Samferdsel">
			<img alt="Samferdsel" src="http://swecono.maps.arcgis.com/sharing/rest/content/items/84fad926d7b74d3fa0a08af10ab8ac6d/data" />
		</a>
	</p>
</div>
```
4. Make shore to update the hyperlink as well, if necessary
5. Want to add a new button? Place the following code between the _div_ class **"Divisions"** and **"Info"**
```html
<a class="groupItem" href="https://<!--place hyperlink-->" target="_blank" title="<!--place title-->">
  <img alt="<!--place alt-->" src="http://<!--place ArcGIS URL-->" />
</a>
```
6. For an new ArcGIS online related button, place the following code in the _div_ class **"ArcGIS"**
```html
<a class="groupItem" href="https://<!--place hyperlink-->" target="_blank" title="<!--place title-->">
  <img width="120px" alt="<!--place alt-->" src="http://<!--place ArcGIS URL-->" />
</a>
```
7. Copy the hole OrganizationDescription.html file, go to _Organization_, to _Setting_, to _General_ and click the <> icon in the toolbar of the Organization Description section
7. Save the changes made to the Organization Description
8. Save the edited html file and push it to GitHub

_For more examples, please refer to the [Documentation](https://community.esri.com/blogs/baldy/2017/07/24/beautify-that-homepage-creating-a-unique-look-and-feel)_

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Jeroen Stegeman - jeroen.stegeman@sweco.no

<!-- Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name) -->

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

-   [Beautify your homepage](https://community.esri.com/blogs/baldy/2017/07/24/beautify-that-homepage-creating-a-unique-look-and-feel)
-   [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
-   [Choose an Open Source License](https://choosealicense.com)
-   [GitHub Pages](https://pages.github.com)
-   [Font Awesome](https://fontawesome.com)

<!-- MARKDOWN LINKS & IMAGES -->

[build-shield]: https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square
[contributors-shield]: https://img.shields.io/badge/contributors-1-orange.svg?style=flat-square
[license-shield]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[product-screenshot]: images/screenshot.png
[default-screenshot]: images/home_default.jpg
[sections-screenshot]: images/home_default_sections.jpg
[share-screenshot]: images/link_arcgis.jpg
[banner-screenshot]: images/edited_banner.jpg
[company-button]: src/images/icons/back-construction.jpg
[arcgis-button]: src/images/icons/Map.png
[bottom-button]: src/images/icons/Informasjon.png
