const {
	Platform,
	StyleSheet,
	PixelRatio,
	Dimensions,
} = require('react-native')

const nums = {
	width:1,
	minWidth:1,
	maxWidth:1,
	height:1,
	minHeight:1,
	maxHeight:1,
	borderWidth:1,
	borderTopWidth:1,
	borderLeftWidth:1,
	borderRightWidth:1,
	borderBottomWidth:1,
	borderStartWidth:1,
	borderEndWidth:1,
	borderRadius:1,
	borderTopStartRadius:1,
	borderTopEndRadius:1,
	borderTopLeftRadius:1,
	borderTopRightRadius:1,
	borderBottomStartRadius:1,
	borderBottomEndRadius:1,
	borderBottomLeftRadius:1,
	borderBottomRightRadius:1,
	margin:1,
	marginTop:1,
	marginLeft:1,
	marginRight:1,
	marginBottom:1,
	marginStart:1,
	marginEnd:1,
	marginVertical:1,
	marginHorizontal:1,
	padding:1,
	paddingTop:1,
	paddingLeft:1,
	paddingRight:1,
	paddingBottom:1,
	paddingStart:1,
	paddingEnd:1,
	paddingVertical:1,
	paddingHorizontal:1,
	fontSize:1,
	lineHeight:1,
	top:1,
	left:1,
	right:1,
	bottom:1,
	start:1,
	end:1,
}

const trns = {
	translateX:1,
	translateY:1,
}

let SCALE = 1.0

const Scaling = {
	StyleSheet: {
		create(styles,scale=SCALE) { return StyleSheet.create(Scaling.Scaling.styles(styles,scale)) },
		compose(...args) { return StyleSheet.compose(...args) },
		flatten(...args) { return StyleSheet.flatten(...args) },
		setStyleAttributePreprocessor(...args) { return StyleSheet.setStyleAttributePreprocessor(...args) },
		absoluteFillObject: StyleSheet.absoluteFillObject,
		absoluteFill: StyleSheet.absoluteFill,
		hairlineWidth: StyleSheet.hairlineWidth,
	},
	Scaling: {
		properties: nums,
		setGlobalScale(s) {
			if(typeof s != 'number') return;
			SCALE = s
		},
		getGlobalScale() {
			return SCALE
		},
		style(style,scale=SCALE) {
			const s = style, ss = {}
			for(let p in s) {
				const n = s[p]
				if(typeof n == 'number' && nums[p]) ss[p] = PixelRatio.roundToNearestPixel(n*scale)
				else if(p == 'transform' && Array.isArray(n)) {
					const a = n.map((e) => {
						let o = {}
						for(let t in e) {
							const v = e[t]
							if(typeof v == 'number' && trns[t]) o[t] = PixelRatio.roundToNearestPixel(v*scale)
							else o[t] = v
						}
						return o
					})
					ss[p] = a
				}
				else ss[p] = n
			}
			return ss
		},
		styles(styles,scale=SCALE) {
			const r = Array.isArray(styles) ? [] : {}
			for(let k in styles) {
				const s = styles[k], ss = Array.isArray(s) ? this.styles(s,scale) : (typeof s == 'object') ? this.style(s,scale) : s
				r[k] = ss
			}
			return (r)
		}
	}
}

module.exports = Scaling