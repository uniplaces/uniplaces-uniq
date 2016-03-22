## Generic Components

### Text Input
```html
<label for="textInput">Normal text input</label>
<input type="text" placeholder="Normal text input" id="textInput">
<br>
<br>
<label for="textInput">Disabled text input</label>
<input type="text" placeholder="Disabled text input" id="textInput" class="disabled" disabled>
<br>
<br>
<div class="validation validation--error">
	<label for="textInput">Error text input</label>
	<input type="text" placeholder="Error text input" id="textInput">
</div>
<br>
<br>
<div class="validation validation--success">
	<label for="textInput" placeholder="Placeholder text">Success text input</label>
	<input type="text" placeholder="Success text input" id="textInput">
</div>
<br>
<br>
```
**Default input styles are provided**

### Checkbox
```html
<input type="checkbox" id="remember-me">
<label for="remember-me">Remember me once</label>
<br>
<input type="checkbox" id="remember-me-twice">
<label for="remember-me-twice">Remember me twice</label>
<br>
<input type="checkbox" id="disabled" disabled>
<label for="disabled">Disabled</label>

```

```scss
input[type="checkbox"] {
	display: none;

	& + label {
		display: inline-block;
		cursor: pointer;
		padding-left: 25px;
		line-height: 32px;
		color: $label-text-color;
		white-space: nowrap;
    	overflow: hidden;
    	text-overflow: ellipsis;

	    	&:before {
				content: '';
				display: inline-block;
				position: absolute;
				left: 0;
				right: 0;
				margin-right: 10px;
				width: 32px;
				height: 32px;
				background-color: #fff;
				border: 2px solid #ccd2d4;
				border-radius: 4px;
			}
	}

	&:checked {

		& + label {

			&:before {
				content: ' ';
				display: inline-block;
				position: absolute;
				left: 0;
				right: 0;
				margin-right: 10px;
				width: 32px;
				height: 32px;
				background: url('../images/checked-checkbox.svg') no-repeat 0 0;
				border: none;
			}
		}
	}

	&:disabled {

		& + label {
			color: #8c999d;
			cursor: not-allowed;

			&:before {
				content: '';
				display: inline-block;
				position: absolute;
				left: 0;
				right: 0;
				margin-right: 10px;
				width: 32px;
				height: 32px;
				background-color: #f6f7f8;
				border: 2px solid #ccd2d4;
				border-radius: 4px;
			}
		}
	}
}

```

### Radio
```html
<input type="radio" id="yes" value="yes" name="radio-group">
<label for="yes">Yes</label>
<br>
<input type="radio" id="no" value="no" name="radio-group">
<label for="no">No</label>
<br>
<input type="radio" id="disabled" value="disabled" name="radio-group" disabled>
<label for="disabled">Disabled radio</label>
```

```scss
input[type="radio"] {
	display: none;

	& + label {
		position: relative;
		display: block;
		height: 32px;
		cursor: pointer;
		padding-left: 40px;
		line-height: 32px;
		color: $label-text-color;
		white-space: nowrap;
    	overflow: hidden;
    	text-overflow: ellipsis;

	    	&:before {
				content: '';
				display: inline-block;
				position: absolute;
				left: 0;
				right: 0;
				margin-right: 10px;
				width: 32px;
				height: 32px;
				background-color: #fff;
				border: 2px solid #ccd2d4;
				border-radius: 50%;
			}
	}

	&:checked {

		& + label {

			&:before {
				content: ' ';
				display: inline-block;
				position: absolute;
				z-index: 1;
				left: 0;
				width: 32px;
				height: 32px;
				border-radius: 50%;
				border: 2px solid color('primary');
			}

			&:after {
				content: ' ';
				position: absolute;
				z-index: 2;
				left: 11px;
				top: calc(50% - 5px);
				width: 10px;
				height: 10px;
				border-radius: 50%;
				background-color: color('primary');
			}
		}
	}

	&:disabled {

		& + label {
			color: #8c999d;
			cursor: not-allowed;

			&:before {
				content: '';
				display: inline-block;
				position: absolute;
				left: 0;
				right: 0;
				background-color: #f6f7f8;
				border: 2px solid #ccd2d4;
				border-radius: 50%;
				width: 32px;
				height: 32px;
			}
		}
	}
}
```

### Text area
```html
<textarea name="" id="" cols="30" rows="10"></textarea>
```

**Default textarea styles are provided**

### Select
```html
<select name="" id="">
    <option value="">Option 1</option>
    <option value="">Option 2</option>
    <option value="">Option 3</option>
    <option value="">Option 4</option>
    <option value="">Option 5</option>
</select>
```

**Default select styles are provided**

### Table
```html
<table>
	<thead>
		<tr>
			<th>#</th>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Username</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">1</th>
			<td>Bruno</td>
			<td>Oliveira</td>
			<td>@BO</td>
		</tr>
		<tr>
			<th scope="row">2</th>
			<td>Miguel</td>
			<td>Melo</td>
			<td>@mmelo</td>
		</tr>
		<tr>
			<th scope="row">3</th>
			<td>Mário</td>
			<td>Pedro</td>
			<td>@MP</td>
		</tr>
	</tbody>
</table>
```
**Default table styles are provided**

### Dropdown
```html
<div class="dropdown">
	<a href="#" class="dropdown__selected-value">Select</a>
	<ul>
		<li class="dropdown__list"><a href="#">Option 01</a></li>
		<li class="dropdown__list"><a href="#">Option 02</a></li>
		<li class="dropdown__list"><a href="#">Option 03</a></li>
		<li class="dropdown__list"><a href="#">Option 04</a></li>
		<li class="dropdown__list"><a href="#">Option 05</a></li>
		<li class="dropdown__list"><a href="#">Option 06</a></li>
		<li class="dropdown__list"><a href="#">Option 07</a></li>
		<li class="dropdown__list"><a href="#">Option 08</a></li>
	<ul>
</div>
```

```scss
.dropdown {
	position: relative;
	width: 50%;

	&__selected-value {
		position: relative;
		display: block;
		height: 40px;
		line-height: 40px;
		padding-left: 15px;
		border: 2px solid #ccd2d4;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		font-size: 18px;
		text-decoration: none;
		color: #ccd2d4;

		&:after {
			position: absolute;
			content: '\02228';
			top: 0;
			right: 15px;
		}

		&.is-active {

			&:after {
				position: absolute;
				content: '\02227';
				top: 0;
				right: 15px;
			}
		}

		&.disabled {
			background-color: #f6f7f8;
			border: 2px solid #ccd2d4;
			cursor: not-allowed;
			color: #8c999d;
		}
	}

	ul {
		display: none;
		border-right: 2px solid #ccd2d4;
		border-bottom: 2px solid #ccd2d4;
		border-left: 2px solid #ccd2d4;
		position: absolute;
		top: 40px;
		left: 0;
		width: 100%;
	}

	&__list {
		height: 40px;
		line-height: 40px;
		font-size: 18px;

		a {
			display: block;
			padding-left: 15px;
			font-size: inherit;
			color: #ccd2d4;
			text-decoration: none;
			transition: background-color .5s;

			&:hover {
				background-color: #91d7f2;
				color: inherit;
			}
		}
	}
}
```
