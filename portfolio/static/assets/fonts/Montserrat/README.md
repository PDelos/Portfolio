# Installing Webfonts
Follow these simple Steps.

## 1.
Put `montserrat/` Folder into a Folder called `fonts/`.

## 2.
Put `montserrat.css` into your `css/` Folder.

## 3. (Optional)
You may adapt the `url('path')` in `montserrat.css` depends on your Website Filesystem.

## 4.
Import `montserrat.css` at the top of you main Stylesheet.

```
@import url('montserrat.css');
```

## 5.
You are now ready to use the following Rules in your CSS to specify each Font Style:
```
font-family: Montserrat-Thin;
font-family: Montserrat-ThinItalic;
font-family: Montserrat-ExtraLight;
font-family: Montserrat-ExtraLightItalic;
font-family: Montserrat-Light;
font-family: Montserrat-LightItalic;
font-family: Montserrat-Regular;
font-family: Montserrat-Italic;
font-family: Montserrat-Medium;
font-family: Montserrat-MediumItalic;
font-family: Montserrat-SemiBold;
font-family: Montserrat-SemiBoldItalic;
font-family: Montserrat-Bold;
font-family: Montserrat-BoldItalic;
font-family: Montserrat-ExtraBold;
font-family: Montserrat-ExtraBoldItalic;
font-family: Montserrat-Black;
font-family: Montserrat-BlackItalic;
font-family: Montserrat-Variable;
font-family: Montserrat-VariableItalic;

```
## 6. (Optional)
Use `font-variation-settings` rule to controll axes of variable fonts:
wght 100.0

Available axes:
'wght' (range from 100.0 to 900.0

