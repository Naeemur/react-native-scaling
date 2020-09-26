# React Native Scaling

Scale react native style properties for different screen sizes.

## Features
- Ease of use with minimum refactoring / editing required
- Global or specific scale value
- Uses ```PixelRatio.roundToNearestPixel(value)``` for pixel perfect UI
- Pure JS, lightweight, works on Android, iOS and Web

![Demo Image](https://naeemur.github.io/asset-bucket/rn-scaling.gif)

## Installation

```
npm install react-native-scaling
```

## Usage

```js
import { Component } from 'react'
import { View, Text } from 'react-native'

/* This is all you need to do most of the time */
import { Stylesheet, Scaling } from 'react-native-scaling'

/* Use like regular StyleSheet from react-native */
const styles = StyleSheet.create({
	body: {
		...StyleSheet.absoluteFillObject,
		flexDirection: 'column',
		padding: 16
	},
	title: {
		fontSize: 24,
		fontWeight: '500'
	},
})

class TheComp extends Component {
	render() {
		return (
			<View style={styles.body}>
				<Text style={styles.title}>Hello World</Text>
			</View>
		)
	}
}

export default TheComp
```

## API

### ***StyleSheet***
A wrapper around react native StyleSheet with same methods and properties like ```create()```, ```flatten()```, ```absoluteFillObject```, etc. only ```create()``` method has added functionality for scaling.
```ts
StyleSheet.create(styleSheetObject:Object [, scale:Number])
```

The param ```scale``` is to specify scaling for the stylesheet, which is multiplied with all the layout style properties like width, fontSize, margin, etc. that use a number (not %) as value. if not specified, it uses global scale value which is 1 by default.

### ***Scaling***
This object is to configure the properties of the library.
```ts
Scaling.setGlobalScale(scale:Number)
```
Sets the global scale value to ```scale```

```ts
Scaling.getGlobalScale():Number
```
Returns the global

```ts
Scaling.style(style:Object [, scale:Number]):Object
```
Computes a single ```style``` object with provided ```scale``` value (uses global scale value if value not provided). Can be used in a component's style prop. Example:
```xml
<View style={Scaling.style({fontSize:16})}>...</View>
```

```ts
Scaling.styles(styleSheet:ObjectOrArray [, scale:Number]):ObjectOrArray
```
Computes a set of styles in an object or array of ```styleSheet``` with provided ```scale``` value (uses global scale value if value not provided). Can be used in a component's style prop.

Example 1:
```js
const styles = Scaling.styles({
	body: { padding:16 },
	title: { fontSize:24 }
})
// then use like...
// <View style={styles.body}>...</View>
```

Example 2:

```xml
<View style={Scaling.styles([styles.one,styles.two,{fontSize:16}])}>...</View>
```

## License
The MIT License (MIT)

Copyright (c) 2020 Md. Naeemur Rahman (https://naeemur.github.io)

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