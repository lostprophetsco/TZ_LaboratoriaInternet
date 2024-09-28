# TZ_LaboratoriaInternet
Документация UI-Kit для проекта TZ_LaboratoriaInternet.

## Breakpoints
В проекте доступно 3 миксинов для медиа-запросов:

```
{
  "sm": {
    "width": "375px"
  },
  "md": {
    "width": "768px"
  },
  "lg": {
    "width": "1920px"
  }
}
```

Применение медиа-запросов:

<table class="table" style="width: 100%">
  <thead>
  <tr>
    <th>Mixin</th>
    <th>Description</th>
  </tr>
  </thead>
  <tbody>
  
<tr>
<td><code>@include sm;</code></td>
<td><code>@media (min-width: 375px) { ... }</code></td>
</tr>

<tr>
<td><code>@include md;</code></td>
<td><code>@media (min-width: 768px) { ... }</code></td>
</tr>

<tr>
<td><code>@include lg;</code></td>
<td><code>@media (min-width: 1920px) { ... }</code></td>
</tr>

  </tbody>
</table>

## Grid
```
@include grid(parameters);
```

Parameters:

* `$columns-sm` - количество колонок на медиа-запросе `sm`.
* `$columns-md` - количество колонок на медиа-запросе `md`.
* `$columns-lg` - количество колонок на медиа-запросе `lg`.

## Themes
Всего тем в проекте: 1.

### Default

CSS переменные темы `theme-default`:

```
--colors-black: #191C1F;
--colors-dark-gray: #5E646A;
--colors-gray: #83898F;
--colors-mid-gray: #C2C8CD;
--colors-light-gray: #ECEFF2;
--colors-extra-light-gray: #F6F8FA;
--default-colors-default-white: #FFFFFF;
--default-colors-accent-dangerous: #F13636;
--default-colors-accent-success: #25CD82;
--default-colors-primary-default: #2A6CEA;
--default-colors-primary-disabled: #ABCAE6;
--default-colors-primary-hover: #397DFF;

```

## Utilities
Набор утилитарных CSS переменных.

### Fonts
Объект `fonts` содержит следующие миксины:

#### Fonts Family
```
@include fonts-family;
```

CSS переменные миксина `fonts-family`:

```
--fonts-family-default: GraphikLCG;
--fonts-family-medium: GraphikLCG-Medium;
--fonts-family-bold: GraphikLCG-Bold;

```
#### Fonts Size
```
@include fonts-size;
```

CSS переменные миксина `fonts-size`:

```
--fonts-size-h1: 24px;
  md: 32px;
  lg: 52px;
--fonts-size-h2: 24px;
  md: 40px;
--fonts-size-h3: 20px;
  lg: 32px;
  md: 40px;
--fonts-size-h5: 20px;
  lg: 32px;
--fonts-size-h6: 16px;
--fonts-size-caption12: 12px;
--fonts-size-b18: 18px;
--fonts-size-b16: 16px;
--fonts-size-b14: 14px;
--fonts-size-b12: 12px;
--fonts-size-b18bold: 18px;
--fonts-size-b16bold: 16px;
--fonts-size-b14bold: 14px;
--fonts-size-b12bold: 12px;

```
#### Fonts Weight
```
@include fonts-weight;
```

CSS переменные миксина `fonts-weight`:

```
--fonts-weight-h1: 600;
--fonts-weight-h2: 600;
--fonts-weight-h3: 600;
--fonts-weight-h4: 600;
--fonts-weight-h5: 600;
--fonts-weight-h6: 600;
--fonts-weight-caption12: 400;
--fonts-weight-b18: 400;
--fonts-weight-b16: 400;
--fonts-weight-b14: 400;
--fonts-weight-b12: 400;
--fonts-weight-b18bold: 600;
--fonts-weight-b16bold: 600;
--fonts-weight-b14bold: 600;
--fonts-weight-b12bold: 600;

```
#### Fonts Height
```
@include fonts-height;
```

CSS переменные миксина `fonts-height`:

```
--fonts-height-h1: 32px;
  md: 40px;
  lg: 64px;
--fonts-height-h2: 32px;
  md: 56px;
--fonts-height-h3: 24px;
  lg: 40px;
--fonts-height-h4: 32px;
  md: 56px;
--fonts-height-h5: 24px;
--fonts-height-h6: 24px;
--fonts-height-caption12: 140%;
--fonts-height-b18: 32px;
--fonts-height-b16: 28px;
--fonts-height-b14: 24px;
--fonts-height-b12: 16px;
--fonts-height-b18bold: 32px;
--fonts-height-b16bold: 28px;
--fonts-height-b14bold: 24px;
--fonts-height-b12bold: 16px;

```
### Indents
Объект `indents` содержит следующие миксины:

#### Indents
```
@include indents;
```

CSS переменные миксина `indents`:

```
--indents-16: 16px;

```
### Transition
Объект `transition` содержит следующие миксины:

#### Transition Time
```
@include transition-time;
```

CSS переменные миксина `transition-time`:

```
--transition-time-10: 0.1s;
--transition-time-20: 0.2s;
--transition-time-30: 0.3s;
--transition-time-40: 0.4s;
--transition-time-60: 0.6s;
--transition-time-80: 0.8s;
--transition-time-100: 1s;

```
#### Transition Easing
```
@include transition-easing;
```

CSS переменные миксина `transition-easing`:

```
--transition-easing-linear: linear;
--transition-easing-ease: ease;
--transition-easing-easeinout: ease-in-out;
--transition-easing-cubicin: cubic-bezier(0.5, 0, 0, 1);
--transition-easing-cubicout: cubic-bezier(0.5, 0, 0.5, 1);

```
### Radius
Объект `radius` содержит следующие миксины:

#### Radius
```
@include radius;
```

CSS переменные миксина `radius`:

```
--radius-4: 4px;
--radius-8: 8px;
--radius-50percent: 50%;
--radius-rounded: 99em;

```
### Shadow
Объект `shadow` содержит следующие миксины:

#### Shadow
```
@include shadow;
```

CSS переменные миксина `shadow`:

```
--shadow-default: 0px 5px 24px 0px #0000001A;

```
### Blur
Объект `blur` содержит следующие миксины:

#### Blur
```
@include blur;
```

CSS переменные миксина `blur`:

```
--blur-0: blur(0px);

```
