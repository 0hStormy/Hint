# Elements

## `<sidebar>`

Creates a sidebar that puts items in a vertical view.

Attributes:
* `width` = `192px`

```html
<sidebar width="192px">
    <h3>Hint</h3>
    <button>Home</button>
    <button>Docs</button>
    <button>Github</button>
</sidebar>
```

## `<nav>`

Creates a navbar that puts items in a horitontal view.

Attributes:
* `height` = `24px`

```html
<nav height="24px">
    <nav-left>
        <a href="">Home</a>
        <a href="">Projects</a>
        <a href="">Blog</a>
    </nav-left>
    <nav-center>
        <p>Example Nav</p>
    </nav-center>
    <nav-right>
        <a href="">Donate</a>
    </nav-right>
</nav>
```

## `<nav-left>`

Put's nav item(s) on the left.

Attributes: None

```html
<nav-left>
    <a href="">Home</a>
    <a href="">Projects</a>
    <a href="">Blog</a>
</nav-left>
```

## `<nav-center>`

Put's nav item(s) in the center.

Attributes: None

```html
<nav-center>
    <p>Example Nav</p>
</nav-right>
```

## `<nav-right>`

Put's nav item(s) on the right.

Attributes: None

```html
<nav-right>
    <a>Donate</a>
</nav-center>
```

## `<hori>`

Puts elements in a horizontal flex box.

Attributes: None

```html
<hori>
    <button>A</button>
    <button>B</button>
    <button>C</button>
</hori>
```

## `<vert>`

Puts elements in a vertical flex box.

Attributes: None

```html
<vert>
    <button>1</button>
    <button>2</button>
    <button>3</button>
</vert>
```

## `<block>`

Puts elements in a article/text focused vertical order.

Attributes: None

```html
<block>
    <h1>Lorem Ipsum</h1>
    <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </p>
</block>
```

## `<block-center>`

Puts elements in a centered article/text focused vertical order.

Attributes: None

```html
<block-center>
    <h1>Lorem Ipsum</h1>
    <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </p>
</block-center>
```

## `<container>`

Puts elements in a box for seperation and organization purposes.

Attributes: None

```html
<container>
    <p>I am a container</p>
    <input type="text">
    <select>
        <option>Apple</option>
        <option>Banana</option>
    </select>
    <button class="accent-bg">Apply</button>
</container>
```

## `<button>`

interactive element the user can click on

Attributes:
* `width`
* `height`

```html
<button class="accent-bg">Apply</button>
```

## `<icon>`

A glyph that helps the user figure out what something is. Relies on [Material Symbols](https://fonts.google.com/icons).

Attributes:
* `size`

```html
<icon>search</icon>
```

# Common CSS Classes

* `accent-bg`: Changes an elements background color to the accent color.