/ *��
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 *����Sizzle.js
 * https://sizzlejs.com/
 *
 *��Ȩ����JS����������������
 *����MIT���֤����
 * https://jquery.org/license
 *
 *���ڣ�2018-01-20T17��24Z
 * /
�����ܣ�ȫ�򣬹�����{

	���ϸ�ʹ�á�;

	if��typeof module ===��object��&& typeof module.exports ===��object����{

		//������CommonJS������CommonJS�Ļ�����������һ����ȷ�ġ����ڡ�
		//���ڣ�ִ�й�������ȡjQuery��
		//����û�д����ĵ����ġ����ڡ��Ļ���
		//������Node.js��������������Ϊmodule.exports��
		//��ͻ���˴���һ�������ġ����ڡ�����Ҫ��
		//����var jQuery = require����jquery������window��;
		//�й���ϸ��Ϣ������ģ�14549Ʊ��
		module.exports = global.document��
			������ȫ����ʵ����
			function��w��{
				if����w.document��{
					�׳��´��󣨡�jQuery��Ҫһ�����ĵ��Ĵ��ڡ���;
				}
				������w��;
			};
	} else {
		������ȫ��;
	}

//�����δ���崰�ڣ��봫�ݴ���
}����typeof window��==��undefined����window��this��function��window��noGlobal��{

// Edge <= 12  -  13 +��Firefox <= 18  -  45 +��IE 10  -  11��Safari 5.1  -  9 +��iOS 6  -  9.1
//�����ϸ���루���磬ASP.NET 4.5�������ϸ�ģʽʱ�׳��쳣
// arguments.callee.caller��trac-13335�������Ǵ�jQuery 3.0��2016����ʼ���ϸ�ģʽӦ���ǳ�����
//������������Щ���Զ���try���еõ�������
���ϸ�ʹ�á�;

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call��Object��;

var support = {};

var isFunction = function isFunction��obj��{

      //֧�֣�Chrome <= 57��Firefox <= 52
      //��ĳЩ������У�typeofΪHTML <object>Ԫ�ط��ء�function��
      //����`typeof document.createElement����object����===��function��`����
      //���ǲ��뽫* any * DOM�ڵ����Ϊ������
      return typeof obj ===��function��&& typeof obj.nodeType��==��number��;
  };


var isWindow = function isWindow��obj��{
		return obj��= null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		���ͣ�true��
		src���ǵģ�
		noModule���ǵ�
	};

	function DOMEval��code��doc��node��{
		doc = doc || ����;

		var i��
			script = doc.createElement����script����;

		script.text = code;
		if��node��{
			for��i in preservedScriptAttributes��{
				if��node [i]��{
					script [i] = node [i];
				}
			}
		}
		doc.head.appendChild��script��.parentNode.removeChild��script��;
	}


function toType��obj��{
	if��obj == null��{
		return obj +����;
	}

	//֧�֣�Android <= 2.3������RegExp��
	return typeof obj ===��object��|| typeof obj ===�����ܡ���
		class2type [toString.call��obj��] || �����󡱣�
		��������;
}
/ *ȫ�����* /
//��.eslintrc.json�ж����ȫ�ֻ����ʹ��ȫ�ֵ�Σ��
//����һ���ط����˿��أ�Ϊ���ģ�鶨��ȫ���ƺ�����ȫ



VAR
	version =��3.3.1����

	//����jQuery�ı��ظ���
	jQuery = function��selector��context��{

		// jQuery����ʵ����ֻ��init���캯��'enhanced'
		//���������jQuery������Ҫinit������������������׳�����
		�����µ�jQuery.fn.init��selector��context��;
	}��

	//֧�֣�Android <= 4.0
	//ȷ�������޼�BOM��NBSP
	rtrim = / ^ [\ s \ uFEFF \ xA0] + | [\ s \ uFEFF \ xA0] + $ / g;

jQuery.fn = jQuery.prototype = {

	//����ʹ�õ�jQuery�ĵ�ǰ�汾
	jquery���汾��

	���캯����jQuery��

	// jQuery�����Ĭ�ϳ���Ϊ0
	���ȣ�0��

	toArray��function����{
		return slice.call��this��;
	}��

	//��ȡƥ��Ԫ�ؼ�OR�еĵ�N��Ԫ��
	//������ƥ���Ԫ�ؼ���Ϊ�ɾ�����
	get��function��num��{

		//���ظɾ������е�����Ԫ��
		if��num == null��{
			return slice.call��this��;
		}

		//ֻ���ؼ����е�һ��Ԫ��
		����num <0����[num + this.length]�����[num];
	}��

	//��ȡһϵ��Ԫ�ز����������ջ
	//�������µ�ƥ��Ԫ�ؼ���
	pushStack��function��elems��{

		//����һ���µ�jQueryƥ��Ԫ�ؼ�
		var ret = jQuery.merge��this.constructor������elems��;

		//���ɶ�����ӵ���ջ�У���Ϊ�ο���
		ret.prevObject = this;

		//�������γɵ�Ԫ�ؼ�
		����;
	}��

	//��ƥ�伯�е�ÿ��Ԫ��ִ�лص���
	each��function��callback��{
		return jQuery.each��this��callback��;
	}��

	map��function��callback��{
		return this.pushStack��jQuery.map��this��function��elem��i��{
			return callback.call��elem��i��elem��;
		}��;;
	}��

	slice��function����{
		return this.pushStack��slice.apply��this��arguments����;
	}��

	��һ����function����{
		return this.eq��0��;
	}��

	last��function����{
		return this.eq��-1��;
	}��

	eq��function��i��{
		var len = this.length��
			j = + i +��i <0��len��0��;
		return this.pushStack��j> = 0 && j <len��[this [j]]��[]��;
	}��

	������function����{
		����this.prevObject || this.constructor����;
	}��

	// �����ڲ�ʹ�á�
	//���ֵ���һ��Array�ķ�������������jQuery������
	���ƣ�
	sort��arr.sort��
	ƴ�ӣ�arr.splice
};

jQuery.extend = jQuery.fn.extend = function����{
	var options��name��src��copy��copyIsArray��clone��
		target = arguments [0] || {}��
		i = 1��
		length = arguments.length��
		deep = false;

	//������㸴�����
	if��typeof target ===��boolean����{
		deep = target;

		//��������ֵ��Ŀ��
		target = arguments [i] || {};
		��++;
	}

	//��Ŀ�����ַ�������������ʱ�����Сд����������㸱���У�
	if��typeof target��==��object��&&��isFunction��target����{
		target = {};
	}

	//���ֻ����һ������������չjQuery����
	if��i === length��{
		target = this;
		һ�� - ;
	}

	for��; i <length; i ++��{

		//�������null /δ�����ֵ
		if����options = arguments [i]����= null��{

			//��չ��������
			for��ѡ���е����ƣ�{
				src = target [name];
				copy = options [name];

				//��ֹ����ֹ����ѭ��
				if��target === copy��{
					����;
				}

				//�������Ҫ�ϲ���ͨ��������飬��ݹ�
				if��deep && copy &&��jQuery.isPlainObject��copy��||
					��copyIsArray = Array.isArray��copy��������{

					if��copyIsArray��{
						copyIsArray = false;
						clone = src && Array.isArray��src����src��[];

					} else {
						clone = src && jQuery.isPlainObject��src����src��{};
					}

					//��Զ��Ҫ�ƶ�ԭʼ���󣬿�¡����
					target [name] = jQuery.extend��deep��clone��copy��;

				//��Ҫ����δ�����ֵ
				} else if��copy��== undefined��{
					target [name] = copy;
				}
			}
		}
	}

	//�����޸ĺ�Ķ���
	�ع�Ŀ��;
};

jQuery.extend��{

	//����ҳ���ϵ�ÿ��jQuery��������Ψһ��
	expando����jQuery��+��version + Math.random������.replace��/ \ D / g����������

	//����û��readyģ���׼������jQuery
	isReady���ǵģ�

	����function��msg��{
		�׳��´���msg��;
	}��

	noop��function����{}��

	isPlainObject��function��obj��{
		var proto��Ctor;

		//������Եķ�
		//ʹ��toString������jQuery.type��������������
		if����obj || toString.call��obj����==��[object Object]����{
			����false;
		}

		proto = getProto��obj��;

		//û��ԭ�͵Ķ������磬`Object.create��null��`������ͨ��
		if����proto��{
			����true;
		}

		//����ԭ�͵Ķ����Ǵ���ģ������������ȫ��Object���������
		Ctor = hasOwn.call��proto����constructor����&& proto.constructor;
		����typeof Ctor ===��function��&& fnToString.call��Ctor��=== ObjectFunctionString;
	}��

	isEmptyObject��function��obj��{

		/ * eslint-disable no-unused-vars * /
		//�����https://github.com/eslint/eslint/issues/6125
		var name;

		for��obj�е����֣�{
			����false;
		}
		����true;
	}��

	//��ȫ���������������ű�
	globalEval��function��code��{
		DOMEval�����룩;
	}��

	each��function��obj��callback��{
		var length��i = 0;

		if��isArrayLike��obj����{
			length = obj.length;
			for��; i <length; i ++��{
				if��callback.call��obj [i]��i��obj [i]��=== false��{
					����;
				}
			}
		} else {
			for��i in obj��{
				if��callback.call��obj [i]��i��obj [i]��=== false��{
					����;
				}
			}
		}

		����obj;
	}��

	//֧�֣�Android <= 4.0
	trim��function��text��{
		return text == null��
			������
			��text +��������replace��rtrim��������;
	}��

	//��������ڲ�ʹ��
	makeArray��function��arr��results��{
		var ret = results || [];

		if��arr��= null��{
			if��isArrayLike��Object��arr������{
				jQuery.merge��ret��
					typeof arr ===��string����
					[arr]��arr
				��;
			} else {
				push.call��ret��arr��;
			}
		}

		����;
	}��

	inArray��function��elem��arr��i��{
		return arr == null��-1��indexOf.call��arr��elem��i��;
	}��

	//֧�֣�����Android <= 4.0������PhantomJS 1
	// push.apply��_��arraylike���׳����ϵ�WebKit
	�ϲ������ܣ���һ���ڶ���{
		var len = + second.length��
			j = 0��
			i = first.length;

		for��; j <len; j ++��{
			first [i ++] = second [j];
		}

		first.length = i;

		�Ȼ���;
	}��

	grep��function��elems��callback��invert��{
		var callbackInverse��
			matches = []��
			i = 0��
			length = elems.length��
			callbackExpect =��invert;

		//������飬ֻ������Ŀ
		//������֤������
		for��; i <length; i ++��{
			callbackInverse =��callback��elems [i]��i��;
			if��callbackInverse��== callbackExpect��{
				matches.push��elems [i]��;
			}
		}

		�ع����;
	}��

	// arg�����ڲ�ʹ��
	map��function��elems��callback��arg��{
		var length��value��
			i = 0��
			ret = [];

		//������飬��ÿ����Ŀת��Ϊ��ֵ
		if��isArrayLike��elems����{
			length = elems.length;
			for��; i <length; i ++��{
				value = callback��elems [i]��i��arg��;

				if��value��= null��{
					ret.push��value��;
				}
			}

		//��������ϵ�ÿ������
		} else {
			for��i in elems��{
				value = callback��elems [i]��i��arg��;

				if��value��= null��{
					ret.push��value��;
				}
			}
		}

		//չƽ�κ�Ƕ������
		return concat.apply��[]��ret��;
	}��

	//�����ȫ��GUID������
	guid��1��

	// jQuery.supportδ��Core��ʹ�ã���������Ŀ����������
	//����������������Ҫ���ڡ�
	֧�֣�֧��
}��;

if��typeof Symbol ===��function����{
	jQuery.fn [Symbol.iterator] = arr [Symbol.iterator];
}

//���class2typeӳ��
jQuery.each��������ֵ�����ַ���������������RegExp���������š�.split����������
function��i��name��{
	class2type [��[object��+ name +��]��] = name.toLowerCase����;
}��;

function isArrayLike��obj��{

	//֧�֣�����������iOS 8.2����ģ�����в������֣�
	//`in`������ڷ�ֹJIT����gh-2145��
	//����©������˲�ʹ��hasOwn
	//����IE�е�Nodelist����
	��obj && obj.length�У�var length = !! obj &&��length����
		type = toType��obj��;

	if��isFunction��obj��|| isWindow��obj����{
		����false;
	}

	��������===�����顱|| ����=== 0 ||
		typeof length ===��number��&& length> 0 &&��length  -  1��in obj;
}
var Sizzle =
/ *��
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 *��ȨjQuery Foundation������������
 *����MIT���֤����
 * http://jquery.org/license
 *
 *���ڣ�2016-08-08
 * /
�����ܣ����ڣ�{

var i��
	֧�֣�
	EXPR��
	gettext�ģ�
	isXML��
	�ǺŻ���
	���룬
	ѡ��
	outermostContext��
	sortInput��
	hasDuplicate��

	//�����ĵ�����
	setDocument��
	���ף�
	docElem��
	documentIsHTML��
	rbuggyQSA��
	rbuggyMatches��
	���
	������

	//�ض���ʵ��������
	expando =��sizzle��+ 1 * new Date������
	preferredDoc = window.document��
	dirruns = 0��
	���= 0��
	classCache = createCache������
	tokenCache = createCache������
	compilerCache = createCache������
	sortOrder = function��a��b��{
		if��a === b��{
			hasDuplicate = true;
		}
		����0;
	}��

	//ʵ������
	hasOwn =��{}����hasOwnProperty��
	arr = []��
	pop = arr.pop��
	push_native = arr.push��
	push = arr.push��
	slice = arr.slice��
	//ʹ�þ����indexOf����Ϊ����native����
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function��list��elem��{
		var i = 0��
			len = list.length;
		for��; i <len; i ++��{
			if��list [i] === elem��{
				�ع���;
			}
		}
		����-1;
	}��

	booleans =��checked | selected | async | autofocus | autoplay | controls | defer | disabled | hidden | ismap | loop | multiple | open | readonly | required | scoped����

	// ���ñ��

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace =��[\\ x20 \\ t \\ r \\ n \\ f]����

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier =��������\\\\��| [\\ w-] | [^ \ 0  -  \\ xa0]��+����

	//����ѡ������http��//www.w3.org/TR/selectors/#attribute-selectors
	attributes =��\\ [��+ whitespace +��*����+ identifier +������������+ whitespace +
		//�����������2��
		��*��[* ^ $ |��?]��=����+�հ�+
		//������ֵ������CSS��ʶ��[capture 5]���ַ���[capture 3��capture 4]��
		��*������ '��������\\\\ | [^ \\\\']��*��'| \ ����������\\\\ | [^ \\\\\��] ��*��\��|����+��ʶ��+������|����+�հ�+
		��* \\]����

	pseudos =��:(��+ identifier +����������\\������+
		//Ҫ����preFilter����Ҫtokenize��ѡ�������������ϲ��������
		// 1.���ã�����3;����4�򲶻�5��
		���� '��������\\\\ | [^ \\\\']��*��'| \ ����������\\\\ | [^ \\\\\��]��*�� \����|��+
		// 2.�򵥣�����6��
		����������\\\\��| [^ \\\\����[\\]] |��+����+����*��|�� +
		// 3.�����κζ���������2��
		����*��+
		����\\��|������

	//ǰ���ͷ�ת��β��ո񣬲������֮ǰ��һЩ�ǿհ��ַ�
	rwhitespace = new RegExp���ո�+��+������g������
	rtrim = new RegExp����^��+ whitespace +��+ |��������^ | [^ \\\\]��������\\\\����*����+ whitespace +��+ $������g ������

	rcomma = new RegExp����^��+ whitespace +��*����+ whitespace +��*������
	rcombinators = new RegExp����^��+ whitespace +��*��[> +?] |��+ whitespace +������+ whitespace +��*������

	rattributeQuotes = new RegExp����=��+ whitespace +��*��[^ \\]'\��] *������+ whitespace +��* \\]������g������

	rpseudo =�µ�RegExp��α����
	ridentifier = new RegExp����^��+ identifier +��$������

	matchExpr = {
		��ID�����µ�RegExp����^������+ + identifier +����������
		��CLASS�����µ�RegExp����^ \\������+ identifier +����������
		��TAG�����µ�RegExp����^����+ identifier +��| [*]��������
		��ATTR�����µ�RegExp����^��+���ԣ���
		��PSEUDO�����µ�RegExp����^��+ pseudos����
		��CHILD�����µ�RegExp����^ :(��|��һ|���|��n |��n  - ��� - �������ͣ�������\\����+ + whitespace +
			��*��ż��|����|����[+  - ] |����\\ d *��n |����+�ո�+��*��������[+  - ] |����+�հ�+
			��*��\\ d +��|������+ whitespace +��* \\��|��������i������
		��bool�����µ�RegExp����^��������+ booleans +����$������i������
		//����ʵ��.is�����Ŀ�
		//������`select`��ʹ��������POSƥ��
		��needsContext�����µ�RegExp����^��+�ո�+��* [> +?] | :(ż��|����| eq | gt | lt | nth | first | last��������\\����+
			�ո�+��*�������� -  \\ d����\\ d *����+�ո�+��* \\��|������= [^  - ] | $��������i����
	}��

	rinputs = / ^������input | select | textarea | button��$ / i��
	rheader = / ^ h \ d $ / i��

	rnative = / ^ [^ {] + \ {\ s * \ [native \ w /��

	//���ڽ���/�ɼ�����ID��TAG��CLASSѡ����
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\ .( [.w-] +����$ /��

	rsibling = / [+?] /��

	// CSS����
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp����\\\\��[\\ da-f] {1,6}��+�ո�+������|��+�ո�+����|����������ig������
	funescape = function��_��escaped��escapedWhitespace��{
		var high =��0x��+ת�� -  0x10000;
		// NaN��ʾ�Ǵ����
		//֧�֣�Firefox <24
		//�����������ֽ���+��0x��
		���ظߣ�==��|| �ӹ����죿
			���ѣ�
			��<0��
				// BMP�����
				String.fromCharCode��high + 0x10000����
				//����ƽ�����㣨����ԣ�
				String.fromCharCode��high >> 10 | 0xD800��high��0x3FF | 0xDC00��;
	}��

	// CSS�ַ���/��ʶ�����л�
	// https://drafts.c??sswg.org/cssom/#common-serializing-idioms
	rcssescape = /��[\ 0- \ x1f \ x7f] | ^  - ��\ d��| ^  -  $ | [^ \ 0- \ x1f \ x7f- \ uFFFF \ w  - ] / g��
	fcssescape = function��ch��asCodePoint��{
		if��asCodePoint��{

			// U + 0000 NULL��ΪU + FFFD REPLACEMENT CHARACTER
			if��ch ===��\ 0����{
				���ء�\ uFFFD��;
			}

			//�����ַ��ͣ�ȡ����λ�ã�������Ϊ�����ת��
			return ch.slice��0��-1��+��\\��+ ch.charCodeAt��ch.length  -  1��.toString��16��+����;
		}

		//�������������ASCII�ַ���÷�б��ת��
		���ء�\\��+ ch;
	}��

	//����iframe
	//�����setDocument����
	//ɾ��������װ���¡�Ȩ�ޱ��ܾ���
	// IE�еĴ���
	unloadHandler = function����{
		setDocument����;
	}��

	disabledAncestor = addCombinator��
		function��elem��{
			return elem.disabled === true &&��elem�еġ�form��| elem�еġ�form����;
		}��
		{dir����parentNode������һ������legend��}
	��;

//�Ż�push.apply��_��NodeList��
����{
	push.apply��
		��arr = slice.call��preferredDoc.childNodes������
		preferredDoc.childNodes
	��;
	//֧�֣�Android <4.0
	//�����ؼ�⵽push.applyʧ��
	arr [preferredDoc.childNodes.length] .nodeType;
} catch��e��{
	push = {apply��arr.length��

		//������ܣ�������Ƭ
		function��target��els��{
			push_native.apply��target��slice.call��els����;
		}��

		//֧�֣�IE <9
		//����ֱ�Ӹ���
		function��target��els��{
			var j = target.length��
				i = 0;
			//��������NodeList.length
			while����target [j ++] = els [i ++]����{}
			target.length = j  -  1;
		}
	};
}

function Sizzle��ѡ�����������ģ���������ӣ�{
	var m��i��elem��nid��match��groups��newSelector��
		newContext = context && context.ownerDocument��

		// nodeTypeĬ��Ϊ9����Ϊ������Ĭ��Ϊdocument
		nodeType = context��context.nodeType��9;

	���=���|| [];

	//����Чѡ�����������ĵĵ�������ǰ����
	if��typeof selector��==��string��||��selector ||
		nodeType��== 1 && nodeType��== 9 && nodeType��== 11��{

		���ؽ��;
	}

	//������HTML�ĵ��п�ݲ��Ҳ����������ǹ�������
	if����seed��{

		if����context��context.ownerDocument || context��preferredDoc����== document��{
			setDocument��context��;
		}
		context = context || ����;

		if��documentIsHTML��{

			//���ѡ�����㹻�򵥣��볢��ʹ�á�get * By *��DOM����
			//������DocumentFragment�����ģ����з��������ڣ�
			if��nodeType��== 11 &&��match = rquickExpr.exec��selector������{

				// IDѡ����
				if����m = match [1]����{

					//�ĵ�������
					if��nodeType === 9��{
						if����elem = context.getElementById��m������{

							//֧�֣�IE��Opera��Webkit
							// TODO��ʶ��汾
							// getElementById���԰����ƶ�����IDƥ��Ԫ��
							if��elem.id === m��{
								results.push��elem��;
								���ؽ��;
							}
						} else {
							���ؽ��;
						}

					//Ԫ��������
					} else {

						//֧�֣�IE��Opera��Webkit
						// TODO��ʶ��汾
						// getElementById���԰����ƶ�����IDƥ��Ԫ��
						if��newContext &&��elem = newContext.getElementById��m����&&
							������context��elem��&&
							elem.id === m��{

							results.push��elem��;
							���ؽ��;
						}
					}

				//����ѡ����
				} else if��match [2]��{
					push.apply��results��context.getElementsByTagName��selector����;
					���ؽ��;

				//��ѡ����
				} else if����m = match [3]��&& support.getElementsByClassName &&
					context.getElementsByClassName��{

					push.apply��results��context.getElementsByClassName��m����;
					���ؽ��;
				}
			}

			//����querySelectorAll
			if��support.qsa &&
				��compilerCache [selector +����] &&
				����rbuggyQSA ||��rbuggyQSA.test��selector������{

				if��nodeType��== 1��{
					newContext = context;
					newSelector = selector;

				// qSA�鿴Element�����ģ��ⲻ��������Ҫ��
				//��лAndrew Dupont�ṩ�����ֽ������
				//֧�֣�IE <= 8
				//�ų�����Ԫ��
				} else if��context.nodeName.toLowerCase������==��object����{

					//����������ID����Ҫʱ��������
					if����nid = context.getAttribute����id��������{
						nid = nid.replace��rcssescape��fcssescape��;
					} else {
						context.setAttribute����id������nid = expando����;
					}

					//���б������ÿ��ѡ������ǰ׺
					groups = tokenize��selector��;
					i = groups.length;
					���� -  �� {
						groups [i] =������+ nid +����+ toSelector��groups [i]��;
					}
					newSelector = groups.join����������;

					//չ���ֵ�ѡ������������
					newContext = rsibling.test��selector��&& testContext��context.parentNode��||
						������;
				}

				if��newSelector��{
					����{
						push.apply�������
							newContext.querySelectorAll��newSelector��
						��;
						���ؽ��;
					} catch��qsaError��{
					} finally {
						if��nid === expando��{
							context.removeAttribute����id����;
						}
					}
				}
			}
		}
	}

	// ����������
	return select��selector.replace��rtrim����$ 1������context��results��seed��;
}

/ **
 *�������޴�С�ļ�ֵ����
 * @returns {function��string��object��}���������ݴ洢������󣬷��ض�������
 *�������ƣ����ո�ģ��ַ����ͣ�����������Expr.cacheLength��
 *ɾ����ɵ���Ŀ
 * /
function createCache����{
	var keys = [];

	function cache��key��value��{
		//ʹ�ã���+�����������뱾��ԭ�����Գ�ͻ����������⣣157��
		if��keys.push��key +������> Expr.cacheLength��{
			//���������µ���Ŀ
			delete cache [keys.shift����];
		}
		return��cache [key +����] = value��;
	}
	���ػ���;
}

/ **
 *���Sizzle������;�Ĺ���
 * @param {Function} fnҪ��ǵĹ���
 * /
function markFunction��fn��{
	fn [expando] = true;
	����fn;
}

/ **
 *֧��ʹ��Ԫ�ؽ��в���
 * @param {Function} fn���ݴ�����Ԫ�ز����ز������
 * /
function assert��fn��{
	var el = document.createElement����fieldset����;

	����{
		return !! fn��el��;
	} catch��e��{
		����false;
	} finally {
		//Ĭ������´��丸����ɾ��
		if��el.parentNode��{
			el.parentNode.removeChild��el��;
		}
		//��IE���ͷ��ڴ�
		el = null;
	}
}

/ **
 *Ϊ����ָ����attrs�����ͬ�Ĵ������
 * @param {String} attrs�Թܵ��ָ��������б�
 * @param {Function} handler��Ӧ�õķ���
 * /
function addHandle��attrs��handler��{
	var arr = attrs.split����|������
		i = arr.length;

	���� -  �� {
		Expr.attrHandle [arr [i]] =�������;
	}
}

/ **
 *��������ֵܽ��õ��ļ�˳��
 * @param {Element} a
 * @param {Element} b
 * @returns {Number}���a��b֮ǰ���򷵻�С��0�����a����b���򷵻ش���0
 * /
function siblingCheck��a��b��{
	var cur = b && a��
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex  -  b.sourceIndex;

	//����������ڵ��϶����ã���ʹ��IE sourceIndex
	if��diff��{
		���ز���;
	}

	//���b�Ƿ����a
	if��cur��{
		while����cur = cur.nextSibling����{
			if��cur === b��{
				����-1;
			}
		}
	}

	�����ˣ�1��-1;
}

/ **
 *������α�����������������͵ĺ���
 * @param {String}����
 * /
function createInputPseudo��type��{
	return������elem��{
		var name = elem.nodeName.toLowerCase����;
		��������===�����롱&& elem.type === type;
	};
}

/ **
 *����һ�����ڰ�ť��α����
 * @param {String}����
 * /
function createButtonPseudo��type��{
	return������elem��{
		var name = elem.nodeName.toLowerCase����;
		return��name ===��input��|| name ===��button����&& elem.type === type;
	};
}

/ **
 *������α��ʹ�õĺ�����enabled /��disabled
 * @param {Boolean}����true��ʾ���ѽ���; false for������
 * /
function createDisabledPseudo��disabled��{

	//��֪�������󱨣�fieldset [disabled]> legend��nth-??of-type��n + 2����can-disable
	return������elem��{

		//ֻ��ĳЩԪ�ؿ���ƥ�䣺���û򣺽���
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if��elem�еġ�form����{

			//�����طǽ���Ԫ�صļ̳н��ã�
			// *�ڽ��õ��ֶμ����г������ص�Ԫ��
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// *���õ�optgroup�е�ѡ��Ԫ��
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			//������ЩԪ�ض���һ����form�����ԡ�
			if��elem.parentNode && elem.disabled === false��{

				//ѡ��Ԫ��������ڣ����Ƴٵ���ѡ����
				if��elem�еġ�label����{
					if��elem.parentNode�еġ�label����{
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				//֧�֣�IE 6  -  11
				//ʹ��isDisabled��ݷ�ʽ���Լ����õ��ֶμ�����
				return elem.isDisabled === disabled ||

					//���û��isDisabled�����ֶ����
					/ * jshint -W018 * /
					elem.isDisabled��==������&&
						disabledAncestor��elem��=== disabled;
			}

			return elem.disabled === disabled;

		//������disabled����֮ǰ����������޷����õ�Ԫ�ء�
		//��Щ�ܺ��߱����ǵ����磨��ǩ��ͼ�����˵�����Ŀ��ץס�ˣ�����Ӧ��
		//�����������������棬������˵��һ������ֵ��
		} else if��elem�еġ�label����{
			return elem.disabled === disabled;
		}

		//ʣ���Ԫ�ؼȲ��ǣ�enabledҲ���ǣ�disabled
		����false;
	};
}

/ **
 *����һ����pseudos�����ڶ�λ�ĺ���
 * @param {Function} fn
 * /
function createPositionalPseudo��fn��{
	return markFunction��function��argument��{
		argument = + argument;
		return markFunction��function��seed��matches��{
			var j��
				matchIndexes = fn��[]��seed.length��argument����
				i = matchIndexes.length;

			//ƥ����ָ���������ҵ���Ԫ��
			���� -  �� {
				if��seed [��j = matchIndexes [i]��]��{
					seed [j] =����ƥ��[j] = seed [j]��;
				}
			}
		}��;
	}��;
}

/ **
 *���ڵ����Ч����ΪSizzle������
 * @param {Element | Object =}������
 * @returns {Element | Object | Boolean}����ڵ㣨����ɽ��ܣ�������Ϊ��ֵ
 * /
function testContext��context��{
	return context && typeof context.getElementsByTagName��==��undefined��&& context;
}

//Ϊ�������������֧�ֱ���
support = Sizzle.support = {};

/ **
 *���XML�ڵ�
 * @param {Element | Object} elemԪ�ػ��ĵ�
 * @returns {Boolean}���iff elem�Ƿ�HTML XML�ڵ㣬��Ϊtrue
 * /
isXML = Sizzle.isXML = function��elem��{
	//������δ���ڵ����������֤documentElement
	//��������IE�м���iframe  - ��4833��
	var documentElement = elem &&��elem.ownerDocument || elem��.documentElement;
	return documentElement��documentElement.nodeName��==��HTML����false;
};

/ **
 *���ݵ�ǰ�ĵ�����һ�����ĵ���صı���
 * @param {Element | Object} [doc]���������ĵ���Ԫ�ػ��ĵ�����
 * @returns {Object}���ص�ǰ�ĵ�
 * /
setDocument = Sizzle.setDocument = function��node��{
	var hasCompare��subWindow��
		doc = node��node.ownerDocument || node��preferredDoc;

	//���doc��Ч���Ѿ�ѡ�У�����ǰ����
	if��doc === document || doc.nodeType��== 9 ||��doc.documentElement��{
		�˻��ļ�;
	}

	//����ȫ�ֱ���
	document = doc;
	docElem = document.documentElement;
	documentIsHTML =��isXML��document��;

	//֧�֣�IE 9-11��Edge
	//ж�غ����iframe�ĵ����׳���Ȩ�ޱ��ܾ�������jQuery��13936��
	if��preferredDoc��== document &&
		��subWindow = document.defaultView��&& subWindow.top��== subWindow��{

		//֧�֣�IE 11��Edge
		if��subWindow.addEventListener��{
			subWindow.addEventListener����unload����unloadHandler��false��;

		//֧�֣�����IE 9  -  10
		} else if��subWindow.attachEvent��{
			subWindow.attachEvent����onunload����unloadHandler��;
		}
	}

	/ *����
	-------------------------------------------------- -------------------- * /

	//֧�֣�IE <8
	//ȷ��getAttributeȷʵ�������Զ���������
	//��IE8�������⣩
	support.attributes = assert��function��el��{
		el.className =��i��;
		return��el.getAttribute����className����;
	}��;

	/ * getElement��s��By *
	-------------------------------------------------- -------------------- * /

	//���getElementsByTagName����*�����Ƿ������Ԫ��
	support.getElementsByTagName = assert��function��el��{
		el.appendChild��document.createComment����������;
		return��el.getElementsByTagName����*������length;
	}��;

	//֧�֣�IE <9
	support.getElementsByClassName = rnative.test��document.getElementsByClassName��;

	//֧�֣�IE <10
	//���getElementById�Ƿ����Ʒ���Ԫ��
	//�ƻ���getElementById���������Ա�̷�ʽ�������ƣ�
	//����ʹ�û��ν����getElementsByName����
	support.getById = assert��function��el��{
		docElem.appendChild��el��.id = expando;
		return��document.getElementsByName || ��document.getElementsByName��expando��.length;
	}��;

	// ID���˲�����
	if��support.getById��{
		Expr.filter [��ID��] =������id��{
			var attrId = id.replace��runescape��funescape��;
			return������elem��{
				return elem.getAttribute����id����=== attrId;
			};
		};
		Expr.find [��ID��] = function��id��context��{
			if��typeof context.getElementById��==��undefined��&& documentIsHTML��{
				var elem = context.getElementById��id��;
				����Ԫ�أ�[elem]��[];
			}
		};
	} else {
		Expr.filter [��ID��] =������id��{
			var attrId = id.replace��runescape��funescape��;
			return������elem��{
				var node = typeof elem.getAttributeNode��==��undefined��&&
					elem.getAttributeNode�� ��ID����;
				return node && node.value === attrId;
			};
		};

		//֧�֣�����IE 6  -  7
		// getElementById��Ϊ���ҿ�ݷ�ʽ���ɿ�
		Expr.find [��ID��] = function��id��context��{
			if��typeof context.getElementById��==��undefined��&& documentIsHTML��{
				var node��i��elems��
					elem = context.getElementById��id��;

				if��elem��{

					//��֤id����
					node = elem.getAttributeNode����id����;
					if��node && node.value === id��{
						����[elem];
					}

					//�ص�getElementsByName
					elems = context.getElementsByName��id��;
					i = 0;
					while����elem = elems [i ++]����{
						node = elem.getAttributeNode����id����;
						if��node && node.value === id��{
							����[elem];
						}
					}
				}

				return [];
			}
		};
	}

	// ��ǩ
	Expr.find [��TAG��] = support.getElementsByTagName��
		function��tag��context��{
			if��typeof context.getElementsByTagName��==��undefined����{
				return context.getElementsByTagName��tag��;

			// DocumentFragment�ڵ�û��gEBTN
			} else if��support.qsa��{
				return context.querySelectorAll��tag��;
			}
		}��

		function��tag��context��{
			var elem��
				tmp = []��
				i = 0��
				//���˵����ɺϣ�һ��������ģ�gEBTNҲ������DocumentFragment�ڵ���
				results = context.getElementsByTagName��tag��;

			//���˵����ܵ�����
			if��tag ===��*����{
				while����elem = results [i ++]����{
					if��elem.nodeType === 1��{
						tmp.push��elem��;
					}
				}

				����tmp;
			}
			���ؽ��;
		};

	//��
	Expr.find [��CLASS��] = support.getElementsByClassName && function��className��context��{
		if��typeof context.getElementsByClassName��==��undefined��&& documentIsHTML��{
			return context.getElementsByClassName��className��;
		}
	};

	/ * QSA / matchesSelector
	-------------------------------------------------- -------------------- * /

	// QSA��matchesSelector֧��

	// matchesSelector����active����Ϊtrueʱ����Ϊfalse��IE9 / Opera 11.5��
	rbuggyMatches = [];

	// qSa����focus����Ϊtrueʱ����Ϊfalse��Chrome 21��
	//������������������ΪIE8 / 9�еĴ������������
	//ÿ����iframe�Ϸ���`document.activeElement`ʱ
	//���ԣ�������������һֱͨ��QSA������IE����
	//�����https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if����support.qsa = rnative.test��document.querySelectorAll������{
		//����QSA������ʽ
		//����Diego Perini��������ʽ����
		���ԣ�function��el��{
			// Select��������Ϊ���ַ���
			//����Ϊ�˲���IE��δ��ȷ����
			//���ò����������ԣ�
			//��Ϊ���Ĵ���Ӧ���㹻��
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild��el��.innerHTML =��<a id ='" + expando +��'> </a>��+
				��<select id ='��+ expando +�� -  \ r \\'msallowcapture =''>��+
				��<option selected =''> </ option> </ select>��;

			//֧�֣�IE8��Opera 11-12.16
			//�����ַ�������^ =��$ =��* =ʱ����Ӧѡ���κ�����
			//����������Opera�б�����δ֪�ģ�����WinRT��˵�ǡ���ȫ�ġ�
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if��el.querySelectorAll����[msallowcapture ^ ='']������length��{
				rbuggyQSA.push����[* ^ $] =��+ whitespace +��*������''| \��\��������;
			}

			//֧�֣�IE8
			//�������Ժ͡�ֵ��δ�õ���ȷ����
			if����el.querySelectorAll����[selected]������length��{
				rbuggyQSA.push����\\ [��+ whitespace +��*��?: value |��+ booleans +��������;
			}

			//֧�֣�Chrome <29��Android <4.4��Safari <7.0 +��iOS <7.0+��PhantomJS <1.9.8+
			if����el.querySelectorAll����[id~ =��+ expando +�� - ]������length��{
				rbuggyQSA.push�� ��?=����;
			}

			// Webkit / Opera  - ��checkedӦ����ѡ����ѡ��Ԫ��
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8�������׳����󣬲��ῴ���Ժ�Ĳ���
			if����el.querySelectorAll������checked������length��{
				rbuggyQSA.push�� ������顱��;
			}

			//֧�֣�Safari 8 +��iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			//ҳ��`selector #id�ֵ����ѡ����'ʧ��
			if����el.querySelectorAll����a����+ expando +��+ *������length��{
				rbuggyQSA.push�� ����+ [+?]������;
			}
		}��;

		���ԣ�function��el��{
			el.innerHTML =��<a href=''disable='disabled'> </a>��+
				��<select disabled ='disabled'> <option /> </ select>��;

			//֧�֣�Windows 8 Native Apps
			//��.innerHTML��ֵ�ڼ䣬���ͺ����������ܵ�����
			var input = document.createElement����input����;
			input.setAttribute����type������hidden����;
			el.appendChild��input��.setAttribute����name������D����;

			//֧�֣�IE8
			//ǿ��ʹ��name�������ִ�Сд
			if��el.querySelectorAll����[name = d]������length��{
				rbuggyQSA.push����name��+ whitespace +��* [* ^ $ |��?]��=����;
			}

			// FF 3.5  - ������/�����ú�����Ԫ�أ�����Ԫ����Ȼ���ã�
			// IE8�������׳����󣬲��ῴ���Ժ�Ĳ���
			if��el.querySelectorAll������enabled������length��== 2��{
				rbuggyQSA.push������enabled��������disabled����;
			}

			//֧�֣�IE9-11 +
			// IE�����õ�ѡ��������ʰȡ���õ��ֶμ����ӽڵ�
			docElem.appendChild��el��.disabled = true;
			if��el.querySelectorAll������disabled������length��== 2��{
				rbuggyQSA.push������enabled��������disabled����;
			}

			// Opera 10-11�����׳����ź����Чα
			el.querySelectorAll�� ��* ,: X����;
			rbuggyQSA.push�� ��*������;
		}��;
	}

	if����support.matchesSelector = rnative.test����matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector��������{

		���ԣ�function��el��{
			//����Ƿ����ִ��matchesSelector
			//�ڶϿ����ӵĽڵ��ϣ�IE 9��
			support.disconnectedMatch = matches.call��el����*����;

			//��Ӧ��ʧ�ܲ������쳣
			// Geckoû�д��󣬶��Ƿ���false
			matches.call��el����[s��='']��x����;
			rbuggyMatches.push������=����pseudos��;
		}��;
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp��rbuggyQSA.join����|������;
	rbuggyMatches = rbuggyMatches.length && new RegExp��rbuggyMatches.join����|������;

	/ *����
	-------------------------------------------------- -------------------- * /
	hasCompare = rnative.test��docElem.compareDocumentPosition��;

	//Ԫ�ذ�����һ��
	//��Ŀ�ĵ������ų�
	//���У�Ԫ�ز���������
	contains = hasCompare || rnative.test��docElem.contains����
		function��a��b��{
			var adown = a.nodeType === 9��a.documentElement��a��
				bup = b && b.parentNode;
			����=== bup || !!��bup && bup.nodeType === 1 &&��
				adown.contains��
					adown.contains��bup����
					a.compareDocumentPosition && a.compareDocumentPosition��bup����16
			����;
		}��
		function��a��b��{
			if��b��{
				while����b = b.parentNode����{
					if��b === a��{
						����true;
					}
				}
			}
			����false;
		};

	/ *����
	-------------------------------------------------- -------------------- * /

	//�ĵ���������
	sortOrder = hasCompare��
	function��a��b��{

		//�ظ�ɾ�����
		if��a === b��{
			hasDuplicate = true;
			����0;
		}

		//���ֻ��һ���������compareDocumentPosition�������򷽷�����
		var compare =��a.compareDocumentPosition  - ��b.compareDocumentPosition;
		if��compare��{
			�ر��Ƚ�;
		}

		//����������붼����ͬһ�ĵ��������λ��
		compare =��a.ownerDocument || a��===��b.ownerDocument || b����
			a.compareDocumentPosition��b����

			//��������֪�������ѶϿ�����
			1;

		//�ѶϿ����ӵĽڵ�
		if���Ƚϣ�1 ||
			����support.sortDetached && b.compareDocumentPosition��a��=== compare����{

			//ѡ����������ѡ�ĵ���صĵ�һ��Ԫ��
			if��a === document || a.ownerDocument === preferredDoc && contains��preferredDoc��a����{
				����-1;
			}
			if��b === document || b.ownerDocument === preferredDoc && contains��preferredDoc��b����{
				����1;
			}

			//����ԭʼ����
			����sortInput��
				��indexOf��sortInput��a�� -  indexOf��sortInput��b������
				0;
		}

		���رȽϣ�4��-1��1;
	}��
	function��a��b��{
		//����ڵ���ͬ������ǰ�˳�
		if��a === b��{
			hasDuplicate = true;
			����0;
		}

		var cur��
			i = 0��
			aup = a.parentNode��
			bup = b.parentNode��
			ap = [a]��
			bp = [b];

		//�޸��ڵ����ĵ���Ͽ�����
		if����aup ||��bup��{
			����һ��===�ļ���-1��
				b ===�ļ���1��
				����-1��
				bup��1��
				sortInput��
				��indexOf��sortInput��a�� -  indexOf��sortInput��b������
				0;

		//����ڵ����ֵܽڵ㣬���ǿ��Կ��ټ��
		} else if��aup === bup��{
			return siblingCheck��a��b��;
		}

		//����������Ҫ���ǵ����ȵ������б���бȽ�
		cur = a;
		while����cur = cur.parentNode����{
			ap.unshift��cur��;
		}
		cur = b;
		while����cur = cur.parentNode����{
			bp.unshift��cur��;
		}

		//������Ѱ�Ҳ���
		while��ap [i] === bp [i]��{
			��++;
		}

		�����ң�
			//���ֵܼ��ڵ��Ƿ��й�ͬ������
			siblingCheck��ap [i]��bp [i]����

			//���������ĵ��еĽڵ���������
			ap [i] === preferredDoc��-1��
			bp [i] === preferredDoc��1��
			0;
	};

	�˻��ļ�;
};

Sizzle.matches = function��expr��elements��{
	return Sizzle��expr��null��null��elements��;
};

Sizzle.matchesSelector = function��elem��expr��{
	//�����Ҫ�������ĵ�����
	if����elem.ownerDocument || elem����== document��{
		setDocument��elem��;
	}

	//ȷ����������ѡ����
	expr = expr.replace��rattributeQuotes����='$ 1']����;

	if��support.matchesSelector && documentIsHTML &&
		��compilerCache [expr +����] &&
		����rbuggyMatches ||��rbuggyMatches.test��expr����&&
		����rbuggyQSA ||��rbuggyQSA.test��expr������{

		����{
			var ret = matches.call��elem��expr��;

			// IE 9��matchesSelector�ڶϿ����ӵĽڵ��Ϸ���false
			if��ret || support.disconnectedMatch ||
					//ͬ�����Ͽ����ӵĽڵ�Ҳ����Ϊ�ĵ�
					// IE 9�е�Ƭ��
					elem.document && elem.document.nodeType��== 11��{
				����;
			}
		} catch��e��{}
	}

	return Sizzle��expr��document��null��[elem]����length> 0;
};

Sizzle.contains = function��context��elem��{
	//�����Ҫ�������ĵ�����
	if����context.ownerDocument || context����== document��{
		setDocument��context��;
	}
	return contains��context��elem��;
};

Sizzle.attr = function��elem��name��{
	//�����Ҫ�������ĵ�����
	if����elem.ownerDocument || elem����== document��{
		setDocument��elem��;
	}

	var fn = Expr.attrHandle [name.toLowerCase����]��
		//��Ҫ��Object.prototype������Ū��jQuery��13807��
		val = fn && hasOwn.call��Expr.attrHandle��name.toLowerCase��������
			fn��elem��name����documentIsHTML����
			��ȷ����;

	return val��== undefined��
		val��
		support.attributes || ��documentIsHTML��
			elem.getAttribute��name����
			��val = elem.getAttributeNode��name����&& val.specified��
				val.value��
				��ֵ;
};

Sizzle.escape = function��sel��{
	return��sel +������.replace��rcssescape��fcssescape��;
};

Sizzle.error = function��msg��{
	�׳��´��󣨡��﷨�����޷�ʶ��ı��ʽ����+ msg��;
};

/ **
 *�ļ������ɾ���ظ�
 * @param {ArrayLike}���
 * /
Sizzle.uniqueSort = function��results��{
	var elem��
		duplicates = []��
		j = 0��
		i = 0;

	//��������*֪��*���ǿ��Լ�⵽�ظ���������������Ǵ���
	hasDuplicate =��support.detectDuplicates;
	sortInput =��support.sortStable && results.slice��0��;
	results.sort��sortOrder��;

	if��hasDuplicate��{
		while����elem = results [i ++]����{
			if��elem === results [i]��{
				j = duplicates.push��i��;
			}
		}
		while��j--��{
			results.splice��duplicates [j]��1��;
		}
	}

	//���������������ͷŶ���
	//�����https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	���ؽ��;
};

/ **
 *ʵ�ó����������ڼ���DOM�ڵ�������ı�ֵ
 * @param {Array | Element} elem
 * /
getText = Sizzle.getText = function��elem��{
	var�ڵ㣬
		ret =������
		i = 0��
		nodeType = elem.nodeType;

	if����nodeType��{
		//���û��nodeType����ô��Ӧ����һ������
		while����node = elem [i ++]����{
			//��Ҫ�������۽ڵ�
			ret + = getText��node��;
		}
	} else if��nodeType === 1 || nodeType === 9 || nodeType === 11��{
		//��Ԫ��ʹ��textContent
		//ɾ����innerText�÷��Ա�֤���е�һ���ԣ�jQuery��11153��
		if��typeof elem.textContent ===��string����{
			return elem.textContent;
		} else {
			//��Խ���ĺ���
			for��elem = elem.firstChild; elem; elem = elem.nextSibling��{
				ret + = getText��elem��;
			}
		}
	} else if��nodeType === 3 || nodeType === 4��{
		return elem.nodeValue;
	}
	//������ע�ͻ���ָ��ڵ�

	����;
};

Expr = Sizzle.selectors = {

	//�������û�����
	cacheLength��50��

	createPseudo��markFunction��

	ƥ�䣺matchExpr��

	attrHandle��{}��

	�ң� {}��

	���ݣ�{
		��>����{dir����parentNode����first��true}��
		������{dir����parentNode��}��
		��+����{dir����previousSibling����first��true}��
		��?����{dir����previousSibling��}
	}��

	preFilter��{
		��ATTR����function��match��{
			match [1] = match [1] .replace��runescape��funescape��;

			//�ƶ�����ֵ��ƥ��[3]�����û��ǲ�����
			match [3] =��match [3] || match [4] || match [5] ||������.replace��runescape��funescape��;

			if��match [2] ===��?=����{
				match [3] =����+ match [3] +����;
			}

			return match.slice��0,4��;
		}��

		��CHILD����function��match��{
			/ *ƥ������matchExpr [��CHILD��]
				1�����ͣ���| nth | ...��
				2ʲô�����ӵ����ͣ�
				3��������ż��|����| \ d * | \ d * n��[+  - ] \ d +����| ...��
				xn + y������4 xn������[+  - ]��\ d * n |��
				5��xn�����ķ���
				6 x xn-component
				y������7������
				yԪ��8 y
			* /
			match [1] = match [1] .toLowerCase����;

			if��match [1] .slice��0,3��===��nth����{
				// nth- *��Ҫ����
				if����match [3]��{
					Sizzle.error��ƥ��[0]��;
				}

				// Expr.filter.CHILD������x��y����
				//��סfalse / true�ֱ�Ϊ0/1
				match [4] = +��match [4]��match [5] +��match [6] || 1����2 *��match [3] ===��even��|| match [3] ===����ֵġ�����;
				match [5] = +����match [7] + match [8]��|| match [3] ===��odd����;

			//�������ͽ�ֹ����
			} else if��match [3]��{
				Sizzle.error��ƥ��[0]��;
			}

			�ع����;
		}��

		��PSEUDO����function��match��{
			var��ʣ��
				unquoted =��match [6] && match [2];

			if��matchExpr [��CHILD��]��test��match [0]����{
				return null;
			}

			//��ԭ���������õĲ���
			if��ƥ��[3]��{
				ƥ��[2] =ƥ��[4] || ƥ��[5] || ����;

			//�Ӳ������ŵĲ�����ɾ��������ַ�
			} else if��unquoted && rpseudo.test��unquoted��&&
				//��tokenize�л�ȡ���ࣨ�ݹ飩
				��excess = tokenize��unquoted��true����&&
				//ǰ������һ��������
				��excess = unquoted.indexOf����������unquoted.length  -  excess�� -  unquoted.length����{

				//�����Ǹ�ָ��
				match [0] = match [0] .slice��0��excess��;
				match [2] = unquoted.slice��0��excess��;
			}

			//������α��������������Ĳ������ͺͲ�����
			return match.slice��0,3��;
		}
	}��

	��������{

		��TAG����function��nodeNameSelector��{
			var nodeName = nodeNameSelector.replace��runescape��funescape��.toLowerCase����;
			return nodeNameSelector ===��*����
				function����{return true; }��
				function��elem��{
					return elem.nodeName && elem.nodeName.toLowerCase����=== nodeName;
				};
		}��

		��CLASS����function��className��{
			var pattern = classCache [className +����];

			����ģʽ||
				��pattern = new RegExp������^ |��+ whitespace +������+ className +������+ whitespace +��| $��������&&
				classCache��className��function��elem��{
					return pattern.test��typeof elem.className ===��string��&& elem.className || typeof elem.getAttribute��==��undefined��&& elem.getAttribute����class����||������;
				}��;
		}��

		��ATTR�������������ƣ����������飩{
			return������elem��{
				var result = Sizzle.attr��elem��name��;

				if��result == null��{
					return operator ===����=��;
				}
				if����operator��{
					����true;
				}

				���+ =����;

				return operator ===��=�������===��飺
					operator ===����=���������==��飺
					operator ===��^ =����check && result.indexOf��check��=== 0��
					operator ===��* =����check && result.indexOf��check��> -1��
					operator ===��$ =����check && result.slice��-check.length��=== check��
					operator ===��?=����������+ result.replace��rwhitespace��������+��������indexOf��check��> -1��
					operator ===��| =�������===���|| result.slice��0��check.length + 1��=== check +�� - ����
					��;
			};
		}��

		��CHILD�������������ͣ����ݣ���������һ�������һ����{
			var simple = type.slice��0,3����==��nth����
				forward = type.slice��-4����==��last����
				ofType = what ===��of-type��;

			���˻�=== 1 && last === 0��

				//��ݷ�ʽ����n  -  *��n��
				function��elem��{
					return !! elem.parentNode;
				}��

				function��elem��context��xml��{
					var cache��uniqueCache��outerCache��node��nodeIndex��start��
						dir =�򵥣�==ת������nextSibling������previousSibling����
						parent = elem.parentNode��
						name = ofType && elem.nodeName.toLowerCase������
						useCache =��xml &&��ofType��
						diff = false;

					if��parent��{

						// :( first | last | only�� - ��child | of-type��
						if��simple��{
							while��dir��{
								node = elem;
								while����node = node [dir]����{
									if��ofType��
										node.nodeName.toLowerCase����=== name��
										node.nodeType === 1��{

										����false;
									}
								}
								//���򣺽� -  *��������ǻ�û����������
								start = dir = type ===��only��&&��start &&��nextSibling��;
							}
							����true;
						}

						��ʼ= [ǰ����parent.firstChild��parent.lastChild];

						// non-xml��nth-??child��...�����������ݴ洢��`parent`��
						if��forward && useCache��{

							//����ǰ���������������`elem`

							// ...��gzip�Ѻõķ�ʽ
							node = parent;
							outerCache = node [expando] || ��node [expando] = {}��;

							//֧�֣�IE <9
							//������¡��attroperties��jQuery gh-1709��
							uniqueCache = outerCache [node.uniqueID] ||
								��outerCache [node.uniqueID] = {}��;

							cache = uniqueCache [type] || [];
							nodeIndex = cache [0] === dirruns && cache [1];
							diff = nodeIndex && cache [2];
							node = nodeIndex && parent.childNodes [nodeIndex];

							while����node = ++ nodeIndex && node && node [dir] ||

								//��һ��ʼ�ͻص�Ѱ��elem��
								��diff = nodeIndex = 0��|| start.pop��������{

								//�ҵ�����`parent`�ϻ����������ж�
								if��node.nodeType === 1 && ++ diff && node === elem��{
									uniqueCache [type] = [dirruns��nodeIndex��diff];
									����;
								}
							}

						} else {
							//ʹ����ǰ�����Ԫ��������������ã�
							if��useCache��{
								// ...��gzip�Ѻõķ�ʽ
								node = elem;
								outerCache = node [expando] || ��node [expando] = {}��;

								//֧�֣�IE <9
								//������¡��attroperties��jQuery gh-1709��
								uniqueCache = outerCache [node.uniqueID] ||
									��outerCache [node.uniqueID] = {}��;

								cache = uniqueCache [type] || [];
								nodeIndex = cache [0] === dirruns && cache [1];
								diff = nodeIndex;
							}

							// xml��nth-??child��...��
							//��nth-??last-child��...����nth��-last���� -  of-type��...��
							if��diff === false��{
								//ʹ����������ͬ��ѭ����ͷ��ʼѰ��`elem`
								while����node = ++ nodeIndex && node && node [dir] ||
									��diff = nodeIndex = 0��|| start.pop��������{

									if����ofType��
										node.nodeName.toLowerCase����=== name��
										node.nodeType === 1��&&
										++ diff��{

										//����ÿ������Ԫ�ص�����
										if��useCache��{
											outerCache = node [expando] || ��node [expando] = {}��;

											//֧�֣�IE <9
											//������¡��attroperties��jQuery gh-1709��
											uniqueCache = outerCache [node.uniqueID] ||
												��outerCache [node.uniqueID] = {}��;

											uniqueCache [type] = [dirruns��diff];
										}

										if��node === elem��{
											����;
										}
									}
								}
							}
						}

						//�ϲ�ƫ������Ȼ����ѭ����С
						diff  -  = last;
						return diff === first || ��diff��first === 0 && diff / first> = 0��;
					}
				};
		}��

		��PSEUDO����function��α��������{
			//α�����Ʋ����ִ�Сд
			// http://www.w3.org/TR/selectors/#pseudo-classes
			//ͨ���ڿ���Ķ��Ƽٵ������µ����������ȱ�����Դ�д������˹
			//��סsetFilters�̳���pseudos
			var args��
				fn = Expr.pseudos [α] || Expr.setFilters [pseudo.toLowerCase����] ||
					Sizzle.error����unsupported pseudo����+ pseudo��;

			//�û�����ʹ��createPseudo��ָʾ
			//�������˺�����Ҫ����
			//����Sizzle����������
			if��fn [expando]��{
				return fn��argument��;
			}

			//�����ֶԾ�ǩ����֧��
			if��fn.length> 1��{
				args = [α��α������������];
				����Expr.setFilters.hasOwnProperty��pseudo.toLowerCase��������
					markFunction��function��seed��matches��{
						var idx��
							ƥ��= fn�����ӣ���������
							i = matched.length;
						���� -  �� {
							idx = indexOf��seed��matched [i]��;
							seed [idx] =����ƥ��[idx] = matched [i]��;
						}
					}����
					function��elem��{
						return fn��elem��0��args��;
					};
			}

			����fn;
		}
	}��

	α��{
		//�����Ǹ��ӵ�α
		��not����markFunction��function��selector��{
			//�޼����ݸ���������ѡ����
			//���⴦��ǰ����β��
			//��Ϊ������Ŀո�
			var input = []��
				results = []��
				matcher = compile��selector.replace��rtrim����$ 1������;

			����ƥ����[expando]��
				markFunction��function��seed��matches��context��xml��{
					var elem��
						unmatched = matcher��seed��null��xml��[]����
						i = seed.length;

					//ƥ��`matcher`�޷�ƥ���Ԫ��
					���� -  �� {
						if����elem = unmatched [i]����{
							seed [i] =����ƥ��[i] = elem��;
						}
					}
				}����
				function��elem��context��xml��{
					input [0] = elem;
					matcher�����룬null��xml�������;
					//��Ҫ����Ԫ�أ����⣣299��
					input [0] = null;
					return��results.pop����;
				};
		}����

		��has����markFunction��function��selector��{
			return������elem��{
				return Sizzle��selector��elem��.length> 0;
			};
		}����

		��contains����markFunction��function��text��{
			text = text.replace��runescape��funescape��;
			return������elem��{
				return��elem.textContent || elem.innerText || getText��elem������indexOf��text��> -1;
			};
		}����

		//��Ԫ���Ƿ��ɣ�lang����ѡ������ʾ
		//������Ԫ�ص�����ֵ
		//���ڱ�ʶ��C��
		//�����Ա�ʶ��C��ͷ����������� - ����
		//�����ִ�Сд��ִ��C��Ԫ������ֵ��ƥ�䡣
		//��ʶ��C��������Ч���������ơ���
		// http://www.w3.org/TR/selectors/#lang-pseudo
		��lang����markFunction��function��lang��{
			// langֵ��������Ч�ı�ʶ��
			if����ridentifier.test��lang ||��������{
				Sizzle.error������֧��lang����+ lang��;
			}
			lang = lang.replace��runescape��funescape��.toLowerCase����;
			return������elem��{
				var elemLang;
				��{
					if����elemLang = documentIsHTML��
						elem.lang��
						elem.getAttribute����xml��lang����|| elem.getAttribute����lang��������{

						elemLang = elemLang.toLowerCase����;
						����elemLang === lang || elemLang.indexOf��lang +�� - ����=== 0;
					}
				}����elem = elem.parentNode��&& elem.nodeType === 1��;
				����false;
			};
		}����

		//����
		��target����function��elem��{
			var hash = window.location && window.location.hash;
			return hash && hash.slice��1��=== elem.id;
		}��

		��root����function��elem��{
			return elem === docElem;
		}��

		��focus����function��elem��{
			return elem === document.activeElement &&����document.hasFocus || document.hasFocus������&& !!��elem.type || elem.href || ~elem.tabIndex��;
		}��

		//��������
		��enabled����createDisabledPseudo��false����
		��disabled����createDisabledPseudo��true����

		��checked����function��elem��{
			//��CSS3�У���checkedӦ������ѡ�к���ѡ�е�Ԫ��
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase����;
			return��nodeName ===��input��&& !! elem.checked��|| ��nodeName ===��option��&& !! elem.selected��;
		}��

		��selected����function��elem��{
			//���ʴ����Ի�Ĭ��ѡ��
			// Safari�е�ѡ����������
			if��elem.parentNode��{
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		}��

		//����
		��empty����function��elem��{
			// http://www.w3.org/TR/selectors/#empty-pseudo
			//��empty��element��1�������ݽڵ㣨text��3; cdata��4; entity ref��5��ȡ����
			//�����������ˣ����ۣ�8;����ָ�7;�ȣ�
			// nodeType <6��Ч����Ϊattributes��2������ʾΪ����
			for��elem = elem.firstChild; elem; elem = elem.nextSibling��{
				if��elem.nodeType <6��{
					����false;
				}
			}
			����true;
		}��

		��parent����function��elem��{
			���أ�Expr.pseudos [��empty��]��elem��;
		}��

		//Ԫ��/��������
		��header����function��elem��{
			return rheader.test��elem.nodeName��;
		}��

		��input����function��elem��{
			return rinputs.test��elem.nodeName��;
		}��

		��button����function��elem��{
			var name = elem.nodeName.toLowerCase����;
			��������===�����롱&& elem.type ===����ť��|| name ===��button��;
		}��

		��text����function��elem��{
			var attr;
			return elem.nodeName.toLowerCase����===��input��&&
				elem.type ===��text��&&

				//֧�֣�IE <8
				//�µ�HTML5����ֵ�����硰����������elem.type ===��text��һ�����
				����attr = elem.getAttribute����type������== null || attr.toLowerCase����===��text����;
		}��

		//�ռ�λ��
		��first����createPositionalPseudo��function����{
			return [0];
		}����

		��last����createPositionalPseudo��function��matchIndexes��length��{
			return [length  -  1];
		}����

		��eq����createPositionalPseudo��function��matchIndexes��length��argument��{
			return [����<0��argument + length��argument];
		}����

		��even����createPositionalPseudo��function��matchIndexes��length��{
			var i = 0;
			for��; i <length; i + = 2��{
				matchIndexes.push��i��;
			}
			return matchIndexes;
		}����

		��odd����createPositionalPseudo��function��matchIndexes��length��{
			var i = 1;
			for��; i <length; i + = 2��{
				matchIndexes.push��i��;
			}
			return matchIndexes;
		}����

		��lt����createPositionalPseudo��function��matchIndexes��length��argument��{
			var i =����<0������+���ȣ�����;
			for��; --i> = 0;��{
				matchIndexes.push��i��;
			}
			return matchIndexes;
		}����

		��gt����createPositionalPseudo��function��matchIndexes��length��argument��{
			var i =����<0������+���ȣ�����;
			for��; ++ i <length;��{
				matchIndexes.push��i��;
			}
			return matchIndexes;
		}��
	}
};

Expr.pseudos [��nth��] = Expr.pseudos [��eq��];

//��Ӱ�ť/��������α
for��i in {radio��true��checkbox��true��file��true��password��true��image��true}��{
	Expr.pseudos [i] = createInputPseudo��i��;
}
for��i in {submit��true��reset��true}��{
	Expr.pseudos [i] = createButtonPseudo��i��;
}

//���ڴ�����setFilters��Easy API
function setFilters����{}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters����;

tokenize = Sizzle.tokenize = function��selector��parseOnly��{
	varƥ�䣬ƥ�䣬���ƣ����ͣ�
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice��match [0] .length��|| ����;
			}
			groups.push����tokens = []����;
		}

		ƥ��=��;

		//���
		if����match = rcombinators.exec��soFar������{
			matched = match.shift����;
			tokens.push��{
				��ֵ��ƥ�䣬
				//����������Ͷ�䵽�ռ�
				type��match [0] .replace��rtrim��������
			}��;
			soFar = soFar.slice��matched.length��;
		}

		//������
		for����Expr.filter�����룩{
			if����match = matchExpr [type] .exec��soFar����&&����preFilters [type] ||
				��match = preFilters [type]��match��������{
				matched = match.shift����;
				tokens.push��{
					��ֵ��ƥ�䣬
					���ͣ����ͣ�
					ƥ�䣺ƥ��
				}��;
				soFar = soFar.slice��matched.length��;
			}
		}

		if����matched��{
			����;
		}
	}

	//������Ч����ĳ���
	//�������ֻ�ǽ���
	//�����׳�����򷵻�����
	����parseOnly��
		soFar.length��
		���� ��
			Sizzle.error��ѡ��������
			//��������
			tokenCache��selector��groups��.slice��0��;
};

function toSelector��tokens��{
	var i = 0��
		len = tokens.length��
		selector =����;
	for��; i <len; i ++��{
		selector + = tokens [i] .value;
	}
	����ѡ����;
}

function addCombinator��matcher��combinator��base��{
	var dir = combinator.dir��
		skip = combinator.next��
		key = skip || DIR��
		checkNonElements = base && key ===��parentNode����
		doneName = done ++;

	����combinator.first��
		//������������/ǰһ��Ԫ��
		function��elem��context��xml��{
			while����elem = elem [dir]����{
				if��elem.nodeType === 1 || checkNonElements��{
					return matcher��elem��context��xml��;
				}
			}
			����false;
		}��

		//�����������/ǰ���Ԫ��
		function��elem��context��xml��{
			var oldCache��uniqueCache��outerCache��
				newCache = [dirruns��doneName];

			//�����޷���XML�ڵ��������������ݣ���������޷�����ϻ���������
			if��xml��{
				while����elem = elem [dir]����{
					if��elem.nodeType === 1 || checkNonElements��{
						if��matcher��elem��context��xml����{
							����true;
						}
					}
				}
			} else {
				while����elem = elem [dir]����{
					if��elem.nodeType === 1 || checkNonElements��{
						outerCache = elem [expando] || ��elem [expando] = {}��;

						//֧�֣�IE <9
						//������¡��attroperties��jQuery gh-1709��
						uniqueCache = outerCache [elem.uniqueID] || ��outerCache [elem.uniqueID] = {}��;

						if��skip && skip === elem.nodeName.toLowerCase������{
							elem = elem [dir] || ELEM;
						} else if����oldCache = uniqueCache [key]��&&
							oldCache [0] === dirruns && oldCache [1] === doneName��{

							//�����newCache���Ա������򴫲�����ǰ��Ԫ��
							return��newCache [2] = oldCache [2]��;
						} else {
							//����newcache��ʹ������򴫲���ǰ���Ԫ��
							uniqueCache [key] = newCache;

							//һ��������ζ�������Ѿ������; ʧ����ζ�����Ǳ���������
							if����newCache [2] = matcher��elem��context��xml������{
								����true;
							}
						}
					}
				}
			}
			����false;
		};
}

function elementMatcher��matchers��{
	return matchers.length> 1��
		function��elem��context��xml��{
			var i = matchers.length;
			���� -  �� {
				if����matchers [i]��elem��context��xml����{
					����false;
				}
			}
			����true;
		}��
		ƥ����[0];
}

function multipleContexts��selector��contexts��results��{
	var i = 0��
		len = contexts.length;
	for��; i <len; i ++��{
		Sizzle��ѡ������contexts [i]�������;
	}
	���ؽ��;
}

function condense��unmatched��map��filter��context��xml��{
	var elem��
		newUnmatched = []��
		i = 0��
		len = unmatched.length��
		mapped = map��= null;

	for��; i <len; i ++��{
		if����elem = unmatched [i]����{
			if����filter || filter��elem��context��xml����{
				newUnmatched.push��elem��;
				if��mapped��{
					map.push��i��;
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher��preFilter��selector��matcher��postFilter��postFinder��postSelector��{
	if��postFilter &&��postFilter [expando]��{
		postFilter = setMatcher��postFilter��;
	}
	if��postFinder &&��postFinder [expando]��{
		postFinder = setMatcher��postFinder��postSelector��;
	}
	return markFunction��function��seed��results��context��xml��{
		var temp��i��elem��
			preMap = []��
			postMap = []��
			preexisting = results.length��

			//�����ӻ��������л�ȡ��ʼԪ��
			elems =����|| multipleContexts��selector ||��*����context.nodeType��[context]��context��[]����

			// Prefilter��ȡƥ�������룬�������ӽ��ͬ����ӳ��
			matcherIn = preFilter &&��seed ||��selector����
				ѹ����elems��preMap��preFilter��context��xml����
				elems�ģ�

			matcherOut = matcher��
				//���������postFinder������˵����ӣ��������postFilter��Ԥ�ȴ��ڵĽ����
				postFinder || �����ӣ�preFilter��preexisting || postFilter����

					// ...�м䴦���Ǳ�Ҫ��
					[]��

					// ...����ֱ��ʹ�ý��
					�����
				matcherIn;

		//������Ҫƥ����
		if��matcher��{
			matcher��matcherIn��matcherOut��context��xml��;
		}

		//Ӧ��postFilter
		if��postFilter��{
			temp = condense��matcherOut��postMap��;
			postFilter��temp��[]��context��xml��;

			//ͨ����ʧ��Ԫ���ƻ�matcherIn��ʹ��ʧ��
			i = temp.length;
			���� -  �� {
				if����elem = temp [i]����{
					matcherOut [postMap [i]] =����matcherIn [postMap [i]] = elem��;
				}
			}
		}

		if��seed��{
			if��postFinder || preFilter��{
				if��postFinder��{
					//ͨ�������м���ѹ����postFinder������������ȡ���յ�matcherOut
					temp = [];
					i = matcherOut.length;
					���� -  �� {
						if����elem = matcherOut [i]����{
							//�ָ�matcherIn��Ϊelem����������ƥ��
							temp.push����matcherIn [i] = elem����;
						}
					}
					postFinder��null����matcherOut = []����temp��xml��;
				}

				//��ƥ���Ԫ�ش������ƶ��������ʹ���Ǳ���ͬ��
				i = matcherOut.length;
				���� -  �� {
					if����elem = matcherOut [i]��&&
						��temp = postFinder��indexOf��seed��elem����preMap [i]��> -1��{

						seed [temp] =����results [temp] = elem��;
					}
				}
			}

		//����Ѷ��壬��ͨ��postFinder���������Ԫ��
		} else {
			matcherOut =Ũ����
				matcherOut ===�����
					matcherOut.splice��preexisting��matcherOut.length����
					matcherOut
			��;
			if��postFinder��{
				postFinder��null��results��matcherOut��xml��;
			} else {
				push.apply��results��matcherOut��;
			}
		}
	}��;
}

function matcherFromTokens��tokens��{
	var checkContext��matcher��j��
		len = tokens.length��
		leadingRelative = Expr.relative [tokens [0] .type]��
		implicitRelative = leadingRelative || Expr.relative [����]��
		��=������ԣ�1��0��

		//����ƥ����ȷ��Ԫ�ؿɴӶ��������ķ���
		matchContext = addCombinator��function��elem��{
			return elem === checkContext;
		}��implicitRelative��true����
		matchAnyContext = addCombinator��function��elem��{
			return indexOf��checkContext��elem��> -1;
		}��implicitRelative��true����
		matchers = [function��elem��context��xml��{
			var ret =����leadingRelative &&��xml || context��== outermostContext����|| ��
				��checkContext = context��.nodeType��
					matchContext��elem��context��xml����
					matchAnyContext��elem��context��xml����;
			//�������Ԫ���ϣ����⣣299��
			checkContext = null;
			����;
		}];

	for��; i <len; i ++��{
		if����matcher = Expr.relative [tokens [i] .type]����{
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i> 1 && elementMatcher��matchers����
					i> 1 && toSelector��
						//���ǰ��ı���Ǻ������ӣ������һ����ʽ������Ԫ��`*`
						tokens.slice��0��i  -  1��.concat��{value��tokens [i  -  2] .type ===��������*��������}��
					��.replace��rtrim����$ 1������
					ƥ�䣬
					��<j && matcherFromTokens��tokens.slice��i��j������
					j <len && matcherFromTokens����tokens = tokens.slice��j��������
					j <len && toSelector�����ƣ�
				��;
			}
			matchers.push��matcher��;
		}
	}

	return elementMatcher��matchers��;
}

function matcherFromGroupMatchers��elementMatchers��setMatchers��{
	var bySet = setMatchers.length> 0��
		byElement = elementMatchers.length> 0��
		superMatcher = function��seed��context��xml��results��outermost��{
			var elem��j��matcher��
				matchedCount = 0��
				i =��0����
				unmatched = seed && []��
				setMatched = []��
				contextBackup = outermostContext��
				//���Ǳ���ʼ��ӵ������Ԫ�ػ�������������
				elems =����|| byElement && Expr.find [��TAG��]����*��������㣩��
				//ʹ������dirruns iff����������ƥ����
				dirrunsUnique =��dirruns + = contextBackup == null��1��Math.random����|| 0.1����
				len = elems.length;

			if��outermost��{
				outermostContext = context === document || ������|| �����;
			}

			//��ӽ�elementMatchersֱ�Ӵ��ݸ������Ԫ��
			//֧�֣�IE <9��Safari
			//ͨ��id����NodeList���ԣ�IE����length��; Safari��<number>��ƥ��Ԫ��
			for��; i��== len &&��elem = elems [i]����= null; i ++��{
				if��byElement && elem��{
					j = 0;
					if����context && elem.ownerDocument��== document��{
						setDocument��elem��;
						xml =��documentIsHTML;
					}
					while����matcher = elementMatchers [j ++]����{
						if��matcher��elem��context || document��xml����{
							results.push��elem��;
							����;
						}
					}
					if��outermost��{
						dirruns = dirrunsUnique;
					}
				}

				//�������ù������Ĳ�ƥ��Ԫ��
				if��bySet��{
					//���ǽ��������п��ܵ�ƥ��
					if����elem =��matcher && elem����{
						matchedCount--;
					}

					//Ϊÿ��Ԫ���ӳ����飬ƥ�����
					if��seed��{
						unmatched.push��elem��;
					}
				}
			}

			//`i`������������ʹ���Ԫ�ص���������������ӵ�`matchedCount`
			//ʹ����Ϊ�Ǹ�����
			matchedCount + = i;

			//�����Ϲ�����Ӧ���ڲ�ƥ���Ԫ��
			//ע�⣺���û�в�ƥ���Ԫ�أ���`matchedCount`���������������
			//����`i`������������û�з�������ѭ���е�_any_Ԫ�أ���Ϊ������
			//û��Ԫ��ƥ�䣬û�����ӡ�
			//����һ����ʼ�ַ�����0��`i`����`i`ֻ����һ���ַ���
			// case���⽫���¡�00��`matchedCount`��`i`��ͬ����Ҳ��
			//����Ϊ��
			if��bySet && i��== matchedCount��{
				j = 0;
				while����matcher = setMatchers [j ++]����{
					matcher����ƥ�䣬setMatched��context��xml��;
				}

				if��seed��{
					//��������Ԫ��ƥ���������������Ҫ
					if��matchedCount> 0��{
						���� -  �� {
							if������unmatched [i] || setMatched [i]����{
								setMatched [i] = pop.call��results��;
							}
						}
					}

					//��������ռλ��ֵ�Խ���ȡʵ��ƥ��
					setMatched = condense��setMatched��;
				}

				//Ϊ������ƥ����
				push.apply��results��setMatched��;

				//�޺˼�ƥ��ɹ�ƥ�����ɹ���ƥ�����涨����
				if��outermost &&��seed && setMatched.length> 0 &&
					��matchedCount + setMatchers.length��> 1��{

					Sizzle.uniqueSort�������;
				}
			}

			//ͨ��Ƕ��ƥ��������ȫ�ֱ����Ĳ���
			if��outermost��{
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			�ع������ױ�;
		};

	����bySet��
		markFunction��superMatcher����
		superMatcher;
}

compile = Sizzle.compile = function��ѡ������ƥ��/ *�����ڲ�ʹ��* /��{
	var i��
		setMatchers = []��
		elementMatchers = []��
		cached = compilerCache [selector +����];

	if����cached��{
		//���ɵݹ麯���ĺ����������ڼ��ÿ��Ԫ��
		if����match��{
			match = tokenize��selector��;
		}
		i = match.length;
		���� -  �� {
			cached = matcherFromTokens��match [i]��;
			if��cached [expando]��{
				setMatchers.push��cached��;
			} else {
				elementMatchers.push��cached��;
			}
		}

		//�����ѱ���ĺ���
		cached = compilerCache��selector��matcherFromGroupMatchers��elementMatchers��setMatchers����;

		//����ѡ�����ͱ�ǻ�
		cached.selector = selector;
	}
	���ػ���;
};

/ **
 *�ͼ�ѡ���ܣ�������Sizzle�ı���
 *ѡ��������
 * @param {String | Function}ѡ����ѡ������Ԥ������
 *ʹ��Sizzle.compile������ѡ��������
 * @param {Element}������
 * @param {����} [���]
 * @param {Array} [seed]Ҫƥ���һ��Ԫ��
 * /
select = Sizzle.select = function��ѡ�����������ģ���������ӣ�{
	var i��tokens��token��type��find��
		compiled = typeof selector ===��function��&& selector��
		match =��seed && tokenize����selector = compiled.selector || selector����;

	���=���|| [];

	//����б���ֻ��һ��ѡ������û�����ӣ��볢����С������
	//�����߱�֤���ǵı�����
	if��match.length === 1��{

		//���ǰ������ѡ������ID�������������
		tokens = match [0] = match [0] .slice��0��;
		if��tokens.length> 2 &&��token = tokens [0]����type ===��ID��&&
				context.nodeType === 9 && documentIsHTML && Expr.relative [tokens [1] .type]��{

			context =��Expr.find [��ID��]��token.matches [0] .replace��runescape��funescape����context��|| []��[0];
			if����context��{
				���ؽ��;

			//Ԥ�����ƥ�����Խ���֤���ȣ��������һ������
			} else if��compiled��{
				context = context.parentNode;
			}

			selector = selector.slice��tokens.shift������value.length��;
		}

		//��ȡ���ҵ���ƥ������Ӽ�
		i = matchExpr [��needsContext��]��test��selector����0��tokens.length;
		���� -  �� {
			token = tokens [i];

			//������ǻ������������ֹ
			if��Expr.relative [��type = token.type��]��{
				����;
			}
			if����find = Expr.find [type]����{
				//��������չ��Ҫ�ֵ�����ӵ�������
				if����seed = find��
					token.matches [0] .replace��runescape��funescape����
					rsibling.test��tokens [0] .type��&& testContext��context.parentNode��|| ������
				������{

					//��������ǿյĻ�û�����ƣ����ǿ�����ǰ����
					tokens.splice��i��1��;
					selector = seed.length && toSelector��tokens��;
					if����selector��{
						push.apply����������ӣ�;
						���ؽ��;
					}

					����;
				}
			}
		}
	}

	//���δ�ṩ���˹��ܣ�����벢ִ�й��˹���
	//��������޸��������ѡ���������ṩ`match`�Ա�������ʶ��
	������|| compile��ѡ������ƥ�䣩����
		���ӣ�
		�����£�
		��documentIsHTML��
		�����
		��context || rsibling.test��selector��&& testContext��context.parentNode��|| ������
	��;
	���ؽ��;
};

//һ������ҵ

//�����ȶ���
support.sortStable = expando.split����������sort��sortOrder��.join��������=== expando;

//֧�֣�Chrome 14-35 +
//���û�д��ݸ��ȽϺ�������ʼ�ռ����ظ�
support.detectDuplicates = !! hasDuplicate;

//���Ĭ���ĵ���ʼ��
setDocument����;

//֧�֣�Webkit <537.32  -  Safari 6.0.3 / Chrome 25����Chrome 27���޸���
//����Ľڵ�����ظ���*�˴�*
support.sortDetached = assert��function��el��{
	//Ӧ����1��������4�����£�
	return el.compareDocumentPosition��document.createElement����fieldset��������1;
}��;

//֧�֣�IE <8
//��ֹ����/���ԡ���ֵ��
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if����assert��function��el��{
	el.innerHTML =��<a href='#'> </a>��;
	return el.firstChild.getAttribute����href����===������;
}����{
	addHandle����type | href | height | width����function��elem��name��isXML��{
		if����isXML��{
			return elem.getAttribute��name��name.toLowerCase����===��type����1��2��;
		}
	}��;
}

//֧�֣�IE <9
//ʹ��defaultValue����getAttribute����value����
if����support.attributes ||��assert��function��el��{
	el.innerHTML =��<input />��;
	el.firstChild.setAttribute����value����������;
	return el.firstChild.getAttribute����value����===����;
}����{
	addHandle����value����function��elem��name��isXML��{
		if����isXML && elem.nodeName.toLowerCase����===��input����{
			return elem.defaultValue;
		}
	}��;
}

//֧�֣�IE <9
//��getAttribute����ʱ��ʹ��getAttributeNode��ȡ����ֵ
if����assert��function��el��{
	return el.getAttribute����disabled����== null;
}����{
	addHandle������ֵ��������elem��name��isXML��{
		var val;
		if����isXML��{
			return elem [name] === true��name.toLowerCase������
					��val = elem.getAttributeNode��name����&& val.specified��
					val.value��
				��ֵ;
		}
	}��;
}

����Sizzle;

}�������ڣ�;



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

//������
jQuery.expr [������] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function��elem��dir��until��{
	var matched = []��
		truncate = until��== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName��elem��name��{

  return elem.nodeName && elem.nodeName.toLowerCase����=== name.toLowerCase����;

};
var rsingleTag =��/ ^ <��[az] [^ \ / \ 0>��\ x20 \ t \ r \ n \ f] *��[\ x20 \ t \ r \ n \ f] * \ /��>�� ����<\ / \ 1> |��$ / i��;



//Ϊ������ʵ����ͬ�Ĺ��ܶ�����
function winnow��elements��qualifier��not��{
	if��isFunction��qualifier����{
		return jQuery.grep��elements��function��elem��i��{
			return !! qualifier.call��elem��i��elem����== not;
		}��;
	}

	//����Ԫ��
	if��qualifier.nodeType��{
		return jQuery.grep��elements��function��elem��{
			return��elem === qualifier����== not;
		}��;
	}

	//Ԫ�ص�Arraylike��jQuery��arguments��Array��
	if��typeof qualifier��==��string����{
		return jQuery.grep��elements��function��elem��{
			return��indexOf.call��qualifier��elem��> -1����== not;
		}��;
	}

	//ֱ�ӹ��˼򵥺͸��ӵ�ѡ����
	return jQuery.filter���޶�����Ԫ�أ����ǣ�;
}

jQuery.filter = function��expr��elems��not��{
	var elem = elems [0];

	����� �� {
		expr =����not����+ expr +������;
	}

	if��elems.length === 1 && elem.nodeType === 1��{
		����jQuery.find.matchesSelector��elem��expr����[elem]��[];
	}

	return jQuery.find.matches��expr��jQuery.grep��elems��function��elem��{
		return elem.nodeType === 1;
	}��;;
};

jQuery.fn.extend��{
	find��function��selector��{
		var i��ret��
			len = this.length��
			self = this;

		if��typeof selector��==��string����{
			return this.pushStack��jQuery��selector��.filter��function����{
				for��i = 0; i <len; i ++��{
					if��jQuery.contains��self [i]��this����{
						����true;
					}
				}
			}��;;
		}

		ret = this.pushStack��[]��;

		for��i = 0; i <len; i ++��{
			jQuery.find��selector��self [i]��ret��;
		}

		����len> 1��jQuery.uniqueSort��ret����ret;
	}��
	filter��function��selector��{
		return this.pushStack��winnow��this��selector || []��false����;
	}��
	not��function��selector��{
		return this.pushStack��winnow��this��selector || []��true����;
	}��
	�ǣ�function��selector��{
		����!! winnow��
			�����

			//�������λ��/���ѡ���������鷵�ؼ����еĳ�Ա�ʸ�
			// so $����p��first������is����p��last�������ڴ���������p����doc���᷵��true��
			typeof selector ===��string��&& rneedsContext.test��selector����
				jQuery��ѡ��������
				ѡ����|| []��
			��
		��������;
	}
}��;


//��ʼ��һ��jQuery����


//�Ը�jQuery���ĵ�������������
var rootjQuery��

	//���HTML�ַ����ļ򵥷���
	//����#id <tag>�Ա���XSSͨ��location.hash����9521��
	//�ϸ��HTMLʶ�𣨣�11290��������<��ͷ��
	//��ݼ�#id�������ٶ�
	rquickExpr = / ^������\ s *��<[\ w \ W] +>��[^>] * |����[\ w  - ] +����$ /��

	init = jQuery.fn.init = function��selector��context��root��{
		var match��elem;

		// HANDLE��$����������$��null����$��undefined����$��false��
		if����selector��{
			�黹���;
		}

		//����init�������ܱ��õ�rootjQuery
		//����Ǩ�ƿ���֧��jQuery.sub��gh-2101��
		root = root || rootjQuery;

		//����HTML�ַ���
		if��typeof selector ===��string����{
			if��selector [0] ===��<��&&
				selector [selector.length  -  1] ===��>��&&
				selector.length> = 3��{

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					//���parseHTML�����ڣ�������׳�����
					jQuery.merge��this��jQuery.parseHTML��
						ƥ��[1]��
						context && context.nodeType��context.ownerDocument || �����ģ��ļ���
						����
					����;

					// HANDLE��$��html��props��
					if��rsingleTag.test��match [1]��&& jQuery.isPlainObject��context����{
						for������������ƥ�䣩{

							//������ܣ��������ĵ����Գ�Ϊ����
							if��isFunction��this [match]����{
								��[ƥ��]��context [match]��;

							// ...�Լ���������ʽ����Ϊ����
							} else {
								this.attr��match��context [match]��;
							}
						}
					}

					�黹���;

				// HANDLE��$����id��
				} else {
					elem = document.getElementById��match [2]��;

					if��elem��{

						//��Ԫ��ֱ��ע��jQuery����
						��[0] = elem;
						this.length = 1;
					}
					�黹���;
				}

			// HANDLE��$��expr��$��...����
			} else if����context || context.jquery��{
				return��context || root��.find��selector��;

			// HANDLE��$��expr��context��
			//�����൱�ڣ�$��context��.find��expr��
			} else {
				return this.constructor��context��.find��selector��;
			}

		//�ֱ���$��DOMElement��
		} else if��selector.nodeType��{
			��[0] =ѡ����;
			this.length = 1;
			�黹���;

		//�ֱ���$�����ܣ�
		//�ĵ������Ŀ�ݷ�ʽ
		} else if��isFunction��selector����{
			return root.ready��== undefined��
				root.ready��selector����

				//���û��׼��������ִ��
				selector��jQuery��;
		}

		return jQuery.makeArray��selector��this��;
	};

//Ϊinit�����ṩjQueryԭ���Թ��Ժ�ʵ����
init.prototype = jQuery.fn;

//��ʼ�����Ĳο�
rootjQuery = jQuery��document��;


var rparentsprev = / ^��?: parents | prev������Until | All����/��

	//��֤�ڴ�Ψһ����ʼʱ����Ψһ���ķ���
	guaranteeUnique = {
		�����ǣ��ǵģ�
		���ݣ�true��
		��һ�����ǵģ�
		��һƪ�����
	};

jQuery.fn.extend��{
	has��function��target��{
		var targets = jQuery��target��this����
			l = targets.length;

		return this.filter��function����{
			var i = 0;
			for��; i <l; i ++��{
				if��jQuery.contains��this��targets [i]����{
					����true;
				}
			}
		}��;
	}��

	����ģ�������ѡ�����������ģ�{
		var cur��
			i = 0��
			l = this.length��
			ƥ��= []��
			targets = typeof selectors��==��string��&& jQuery��selectors��;

		//λ��ѡ������Զ����ƥ�䣬��Ϊû��_selection_������
		if����rneedsContext.test��selectors����{
			for��; i <l; i ++��{
				for��cur = this [i]; cur && cur��== context; cur = cur.parentNode��{

					//ʼ�������ĵ�Ƭ��
					if��cur.nodeType <11 &&��Ŀ�ꣿ
						targets.index��cur��> -1��

						//��Ҫ����Ԫ�ش��ݸ�Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector��cur��selectors������{

						matched.push��cur��;
						����;
					}
				}
			}
		}

		return this.pushStack��matched.length> 1��jQuery.uniqueSort��matched����matched��;
	}��

	//ȷ��������Ԫ�ص�λ��
	index��function��elem��{

		//û�в������ڸ����з�������
		if����elem��{
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil��function��elem��i��until��{
		return dir��elem����nextSibling����ֱ����;
	}��
	prevUntil��function��elem��i��until��{
		return dir��elem����previousSibling����ֱ����;
	}��
	�ֵܽ��ã�function��elem��{
		return siblings����elem.parentNode || {}����firstirstChild��elem��;
	}��
	children��function��elem��{
		�����ֵܽ��ã�elem.firstChild��;
	}��
	���ݣ�function��elem��{
        if��nodeName��elem����iframe������{
            return elem.contentDocument;
        }

        //֧�֣�����IE 9  -  11������iOS 7��Android�����<= 4.3
        //��������н�ģ��Ԫ����Ϊ����Ԫ��
        //��֧��
        if��nodeName��elem����template������{
            elem = elem.content || ELEM;
        }

        return jQuery.merge��[]��elem.childNodes��;
	}
}��function��name��fn��{
	jQuery.fn [name] = function��until��selector��{
		var matched = jQuery.map��this��fn��until��;

		if��name.slice��-5����==��Until����{
			selector = until;
		}

		if��selector && typeof selector ===��string����{
			matched = jQuery.filter��selector��matched��;
		}

		if��this.length> 1��{

			//ɾ���ظ���
			if����guaranteedUnique [name]��{
				jQuery.uniqueSort��ƥ�䣩;
			}

			//��ĸ*��ǰ����Ʒ������
			if��rparentsprev.test��name����{
				matched.reverse����;
			}
		}

		return this.pushStack��matching��;
	};
}��;
var rnothtmlwhite =��/ [^ \ x20 \ t \ r \ n \ f] + / g��;



//���ַ�����ʽ��ѡ��ת��Ϊ�����ʽ��ѡ��
function createOptions��options��{
	var object = {};
	jQuery.each��options.match��rnothtmlwhite��|| []��function��_��flag��{
		object [flag] = true;
	}��;
	���ض���;
}

/ *
 *ʹ�����²��������ص��б�
 *
 * options����ѡ�Ŀո�ָ�ѡ���б������ı䷽ʽ
 *�ص��б���ֻ����ͳ��ѡ�����
 *
 *Ĭ������£��ص��б����¼��ص��б�һ��������
 *��Ρ���͡���
 *
 *���ܵ�ѡ��
 *
 *һ�Σ���ȷ���ص��б�ֻ�ܱ�����һ�Σ������ڣ�
 *
 * memory����������ǰ��ֵ����������ӵ��κλص�
 *�б����������µġ����䡱��ȼ��
 *ֵ�������ڣ�
 *
 *Ψһ����ȷ���ص�ֻ�����һ�Σ��б���û���ظ���
 *
 * stopOnFalse�����ص�����falseʱ�жϵ���
 *
 * /
jQuery.Callbacks = function��options��{

	//�����Ҫ����ѡ���String��ʽת��ΪObject��ʽ
	//�������ȼ�黺�棩
	options = typeof options ===��string����
		createOptions��options����
		jQuery.extend��{}��options��;

	var //����б�ǰ�Ƿ����ڴ����ı�־
		�����

		//���������б���ϴδ���ֵ
		���䣬

		//����Ƿ��Ѵ����б�
		��ͣ�

		//��ֹ���������
		������

		//ʵ�ʻص��б�
		list = []��

		//���ظ��б��ִ�����ݶ���
		queue = []��

		//��ǰ�����ص���������������Ҫͨ�����/ɾ���޸ģ�
		firingIndex = -1��

		//�����ص�
		fire = function����{

			//ǿ�Ƶ������
			������=������|| options.once;

			//Ϊ���й����ִ��ִ�лص���
			//����firingIndex���Ǻ�����ʱ����
			fired = firing = true;
			for��; queue.length; firingIndex = -1��{
				memory = queue.shift����;
				while��++ firingIndex <list.length��{

					//���лص��������ǰ��ֹ
					if��list [firingIndex] .apply��memory [0]��memory [1]��=== false &&
						options.stopOnFalse��{

						//��ת���������������ݣ��Ա�.add������������
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			//���������������ݣ�����������
			if����options.memory��{
				memory = false;
			}

			fired = false;

			//������������������Ǿ�����ɾ���
			if��locked��{

				//���������δ����Ӻ��е����ݣ��뱣��һ�����б�
				if��memory��{
					list = [];

				//���򣬴˶���������
				} else {
					list =����;
				}
			}
		}��

		//ʵ�ʻص�����
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if��memory &&��firing��{
						firingIndex = list.length  -  1;
						queue.push��memory��;
					}

					��function add��args��{
						jQuery.each��args��function��_��arg��{
							if��isFunction��arg����{
								if����options.unique ||��self.has��arg����{
									list.push��arg��;
								}
							} else if��arg && arg.length && toType��arg����==��string����{

								//�ݹ���
								add��arg��;
							}
						}��;
					}����������;

					if��memory &&��firing��{
						�𣨣�;
					}
				}
				�黹���;
			}��

			//���б���ɾ���ص�
			remove��function����{
				jQuery.each��arguments��function��_��arg��{
					var index;
					while����index = jQuery.inArray��arg��list��index����> -1��{
						list.splice��index��1��;

						//����������
						if��index <= firingIndex��{
							firingIndex--;
						}
					}
				}��;
				�黹���;
			}��

			//�������Ļص��Ƿ����б��С�
			//���û�и����������򷵻�list�Ƿ񸽼��˻ص���
			has��function��fn��{
				����fn��
					jQuery.inArray��fn��list��> -1��
					list.length> 0;
			}��

			//���б���ɾ�����лص�
			empty��function����{
				if��list��{
					list = [];
				}
				�黹���;
			}��

			//����.fire��.add
			//��ֹ���е�ǰ/�������ִ��
			//������лص���ֵ
			disable��function����{
				locked = queue = [];
				list = memory =����;
				�黹���;
			}��
			disabled��function����{
				return��list;
			}��

			//����.fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory =����;
				}
				�黹���;
			}��
			��������function����{
				����!!����;
			}��

			//ʹ�ø����������ĺͲ����������лص�
			fireWith��function��context��args��{
				if����locked��{
					args = args || [];
					args = [context��args.slice��args.slice������args];
					queue.push��args��;
					if����firing��{
						�𣨣�;
					}
				}
				�黹���;
			}��

			//ʹ�ø����Ĳ����������лص�
			fire��function����{
				self.fireWith��this��arguments��;
				�黹���;
			}��

			//֪���ص������Ƿ����ٱ����ù�һ��
			fired��function����{
				����!!�����
			}
		};

	�ع�����;
};


function Identity��v��{
	����v;
}
function Thrower��ex��{
	�׳�ǰ
}

function adoptValue��value��resolve��reject��noValue��{
	var����;

	����{

		//���ȼ��promise����������ͬ����Ϊ��Ȩ
		if��value && isFunction����method = value.promise������{
			method.call��value��.done��resolve��.fail��reject��;

		//��������
		} else if��value && isFunction����method = value.then������{
			method.call��value��resolve��reject��;

		//�����Ǳ��ɵ���
		} else {

			//ͨ����Array��slice��boolean`noValue`ת��Ϊ����������`resolve`������
			// * false��[value] .slice��0��=> resolve��value��
			// * true��[value] .slice��1��=> resolve����
			resolve.apply��undefined��[value] .slice��noValue����;
		}

	//����Promises / A +�����쳣ת��Ϊ�ܾ�
	//����jQuery.whenû�н�������ǿ����������ֵĶ�����
	//�ӳ٣�Ȼ�������������ƾܾ���
	} catch��value��{

		//֧�֣�����Android 4.0
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[���ܾ�������ʧ�ܡ���jQuery.Callbacks�����������䡱����
					jQuery.Callbacks����һ�μ��䡱����1�����ܾ���]
			]
			state =��pending����
			promise = {
				state��function����{
					����״̬;
				}��
				always��function����{
					deferred.done��arguments��.fail��arguments��;
					�黹���;
				}��
				��catch����function��fn��{
					return promise.then��null��fn��;
				}��

				//���ֹܵ��Խ��з���
				pipe��function��/ * fnDone��fnFail��fnProgress * /��{
					var fns = arguments;

					return jQuery.Deferred��function��newDefer��{
						jQuery.each��Ԫ�飬������i��tuple��{

							//��Ԫ�飨���ȣ���ɣ�ʧ�ܣ�ӳ�䵽��������ɣ�ʧ�ܣ����ȣ�
							var fn = isFunction��fns [tuple [4]]��&& fns [tuple [4]];

							// deferred.progress��function����{bind to newDefer or newDefer.notify}��
							// deferred.done��function����{bind to newDefer or newDefer.resolve}��
							// deferred.fail��function����{bind to newDefer or newDefer.reject}��
							deferred [tuple [1]]��function����{
								var returns = fn && fn.apply��this��arguments��;
								if������&& isFunction��returned.promise����{
									returned.promise����
										.progress��newDefer.notify��
										.done��newDefer.resolve��
										.fail��newDefer.reject��;
								} else {
									newDefer [tuple [0] +��With��]��
										�����
										fn��[����]������
									��;
								}
							}��;
						}��;
						fns = null;
					} ����ŵ�ԣ���;
				}��
				then��function��onFulfilled��onRejected��onProgress��{
					var maxDepth = 0;
					function resolve��depth��deferred��handler��special��{
						return function����{
							var that = this��
								args =������
								mightThrow = function����{
									var���أ�Ȼ��;

									//֧�֣���ŵ/ A +��2.3.3.3.3��
									// https://promisesaplus.com/#point-59
									//����˫�طֱ��ʳ���
									if�����<maxDepth��{
										����;
									}

									returned = handler.apply��that��args��;

									//֧�֣�Promises / A +��2.3.1��
									// https://promisesaplus.com/#point-48
									if������=== deferred.promise������{
										�׳��µ�TypeError����Thenable self-resolution����;
									}

									//֧�֣�Promises / A + section 2.3.3.1,3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									//ֻ����һ��`then`
									Ȼ��=����&&

										//֧�֣���ŵ/ A +��2.3.4��
										// https://promisesaplus.com/#point-64
										//ֻ������ͺ����Ŀ�����
										��typeof����===������||
											typeof����===����������&&
										returned.then;

									//����һ�����ص�
									if��isFunction��then����{

										//���⴦������֪ͨ��ֻ�ǵȴ����
										if��special��{
											then.call��
												�أ�
												�����maxDepth��deferred��Identity��special����
												�����maxDepth��deferred��Thrower��special��
											��;

										//������������������Ҳ�����˽���
										} else {

											// ...�����Ծɵķֱ���ֵ
											MAXDEPTH ++;

											then.call��
												�أ�
												�����maxDepth��deferred��Identity��special����
												�����maxDepth��deferred��Thrower��special����
												�����maxDepth��deferred��Identity��
													deferred.notifyWith��
											��;
										}

									//����������������ֵ
									} else {

										//ֻ���滻���������ܴ���������
										//�Ͷ��ֵ���ǹ淶��Ϊ��
										if��handler��== Identity��{
											��=δ����;
											args = [����];
										}

										//�����ֵ
										//Ĭ�Ͻ����ѽ��
										��special || deferred.resolveWith����that��args��;
									}
								}��

								//ֻ����ͨ�����������������񲢾ܾ��쳣
								����=���⣿
									mayThrow��
									function����{
										����{
											mightThrow����;
										} catch��e��{

											if��jQuery.Deferred.exceptionHook��{
												jQuery.Deferred.exceptionHook��e��
													process.stackTrace��;
											}

											//֧�֣���ŵ/ A +��2.3.3.3.4.1��
											// https://promisesaplus.com/#point-61
											//���Խ�����쳣
											if��depth + 1> = maxDepth��{

												//ֻ���滻���������ܴ���������
												//�Ͷ��ֵ���ǹ淶��Ϊ��
												if��handler��== Thrower��{
													��=δ����;
													args = [e];
												}

												deferred.rejectWith��that��args��;
											}
										}
									};

							//֧�֣���ŵ/ A +��2.3.3.3.1��
							// https://promisesaplus.com/#point-57
							//�������½����ŵ���Ա������ܾ�
							//��������
							if����ȣ�{
								������;
							} else {

								//����쳣�����ÿ�ѡ�Ĺ�������¼��ջ
								//��Ϊ��ִ���첽ʱ���ᶪʧ
								if��jQuery.Deferred.getStackHook��{
									process.stackTrace = jQuery.Deferred.getStackHook����;
								}
								window.setTimeout��process��;
							}
						};
					}

					return jQuery.Deferred��function��newDefer��{

						// progress_handlers.add��...��
						Ԫ��[0] [3] .add��
							�����
								0��
								newDefer��
								isFunction��onProgress����
									onProgress��
									��ݣ�
								newDefer.notifyWith
							��
						��;

						// fulfillilled_handlers.add��...��
						Ԫ��[1] [3] .add��
							�����
								0��
								newDefer��
								isFunction��onFulfilled����
									onFulfilled��
									���
							��
						��;

						// rejected_handlers.add��...��
						Ԫ��[2] [3] .add��
							�����
								0��
								newDefer��
								isFunction��onRejected����
									onRejected��
									�˶�Ա
							��
						��;
					} ����ŵ�ԣ���;
				}��

				//������ڵĳ�ŵ
				//����ṩ��obj����promise������ӵ�������
				promise��function��obj��{
					return obj��= null��jQuery.extend��obj��promise����promise;
				}
			}��
			deferred = {};

		//����ض����б�ķ���
		jQuery.each��Ԫ�飬������i��tuple��{
			var list = tuple [2]��
				stateString = tuple [5];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise [tuple [1]] = list.add;

			//����״̬
			if��stateString��{
				list.add��
					function����{

						// state =���ѽ�������������У�
						// state =��rejected��
						state = stateString;
					}��

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					Ԫ��[3  -  i] [2] .disable��

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					Ԫ��[3  -  i] [3] .disable��

					// progress_callbacks.lock
					Ԫ��[0] [2] .lock��

					// progress_handlers.lock
					Ԫ��[0] [3] .lock
				��;
			}

			// progress_handlers.fire
			// fulfillilled_handlers.fire
			// rejected_handlers.fire
			list.add��Ԫ��[3] .fire��;

			// deferred.notify = function����{deferred.notifyWith��...��}
			// deferred.resolve = function����{deferred.resolveWith��...��}
			// deferred.reject = function����{deferred.rejectWith��...��}
			deferred [tuple [0]] = function����{
				deferred [tuple [0] +��With��]����= = deferred��undefined��this��arguments��;
				�黹���;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred [tuple [0] +��With��] = list.fireWith;
		}��;

		//ʹ���ڳ�ŵ
		promise.promise�����ڣ�;

		//����еĻ������ø�����func
		if��func��{
			func.call���ӳ٣����ڣ�;
		}

		// ȫ����ɣ�
		�˻�����;
	}��

	//���ڰ�����
	when��function��singleValue��{
		VAR

			//δ��ɵ�����������
			remaining = arguments.length��

			//δ�������������
			��=ʣ�µģ�

			//������������
			resolveContexts = Array��i����
			resolveValues = slice.call��arguments����

			//��������
			master = jQuery.Deferred������

			//�����ص�����
			updateFunc = function��i��{
				return������ֵ��{
					resolveContexts [i] = this;
					resolveValues [i] = arguments.length> 1��slice.call��arguments����value;
					if������--remaining����{
						master.resolveWith��resolveContexts��resolveValues��;
					}
				};
			};

		//���õ������Ϳղ�������Promise.resolve
		if��ʣ��<= 1��{
			adoptValue��singleValue��master.done��updateFunc��i��������resolve��master.reject��
				��ʣ�µģ�;

			//ʹ��.then�����򿪸����豸���μ�gh-3000��
			if��master.state����===��pending��||
				isFunction��resolveValues [i] && resolveValues [i] .then����{

				return master.then����;
			}
		}

		//��Promise.all����Ԫ��һ���ۺ϶������
		���� -  �� {
			adoptValue��resolveValues [i]��updateFunc��i����master.reject��;
		}

		return master.promise����;
	}
}��;


//��Щͨ����ʾ����Ա�ڿ��������г���
//���쾯�����ǣ�������Ĭ���������ǡ�
var rerrorNames = / ^��Eval | Internal | Range | Reference | Syntax | Type | URI��Error $ /;

jQuery.Deferred.exceptionHook = function�����󣬶�ջ��{

	//֧�֣�����IE 8  -  9
	//��dev���ߴ�ʱ������̨�ʹ��ڣ��������ʱ����
	if��window.console && window.console.warn && error && rerrorNames.test��error.name����{
		window.console.warn����jQuery.Deferred exception����+ error.message��error.stack��stack��;
	}
};




jQuery.readyException = function��error��{
	window.setTimeout��function����{
		�׳�����;
	}��;
};




//��DOM׼������ʱʹ�õ��ӳ�
var readyList = jQuery.Deferred����;

jQuery.fn.ready = function��fn��{

	readyList
		.then��fn��

		//�ں����а�װjQuery.readyException�Ա����
		//�ڴ�����ʱ�����������ǻص�
		//ע��
		.catch��function��error��{
			jQuery.readyException��error��;
		}��;

	�黹���;
};

jQuery.extend��{

	// DOM�Ƿ����ʹ�ã�һ������������Ϊtrue��
	isReady��false��

	//һ�������������ڸ���֮ǰҪ�ȴ�����Ŀ��
	//�����¼����� ����6781
	readyWait��1��

	// DOM׼������ʱ����
	ready��function��wait��{

		//����д��������ͣ��ֹ�������Ѿ�׼��������ֹ
		if��wait === true��--jQuery.readyWait��jQuery.isReady��{
			����;
		}

		//��סDOM׼������
		jQuery.isReady = true;

		//���������DOM Ready�¼������������٣�������Ҫʱ�ȴ�
		if���ȵȣ�== true && --jQuery.readyWait> 0��{
			����;
		}

		//����а󶨵ĺ�������ִ��
		readyList.resolveWith��document��[jQuery]��;
	}
}��;

jQuery.ready.then = readyList.then;

// ready�¼���������self cleanup����
function completed����{
	document.removeEventListener����DOMContentLoaded��������ɣ�;
	window.removeEventListener����load����completed��;
	jQuery.ready����;
}

//�������$��document��.ready���������
//��������¼�������
//֧�֣�IE <= 9  -  10
//�Ͼɵ�IE��ʱ����緢��������ʽ���ź�
if��document.readyState ===��complete��||
	��document.readyState��==��loading��&&��document.documentElement.doScroll����{

	//�첽��������ʹ�ű��л����ӳ�׼��
	window.setTimeout��jQuery.ready��;

} else {

	//ʹ�÷�����¼��ص�
	document.addEventListener����DOMContentLoaded��������ɣ�;

	//���˵�window.onload���⽫ʼ����Ч
	window.addEventListener����load����completed��;
}




//��ȡ�����ü���ֵ�Ķ๦�ܷ���
//���ֵ�Ǻ����������ѡ��ִ��ֵ/ s
var access = function��elems��fn��key��value��chainable��emptyGet��raw��{
	var i = 0��
		len = elems.length��
		bulk = key == null;

	//�������ֵ
	if��toType��key��===��object����{
		chainable = true;
		for��i in key��{
			���ʣ�elems��fn��i��key [i]��true��emptyGet��raw��;
		}

	//����һ��ֵ
	} else if��value��== undefined��{
		chainable = true;

		if����isFunction��value����{
			raw = true;
		}

		if��bulk��{

			//�����������������������
			if��raw��{
				fn.call��elems��value��;
				fn = null;

			// ...ִ�к���ֵʱ����
			} else {
				bulk = fn;
				fn = function��elem��key��value��{
					return bulk.call��jQuery��elem����value��;
				};
			}
		}

		if��fn��{
			for��; i <len; i ++��{
				FN��
					elems [i]���ؼ���ԭʼ��
					��ֵ��
					value.call��elems [i]��i��fn��elems [i]��key����
				��;
			}
		}
	}

	if��chainable��{
		����Ԫ��;
	}

	//��ȡ
	if��bulk��{
		return fn.call��elems��;
	}

	����len��fn��elems [0]��key����emptyGet;
};


//ƥ�����ۺŵ��ַ���
var rmsPrefix = / ^  -  ms- /��
	rdashAlpha = /  - ��[az]��/ g;

//��camelCase����replace�����Ļص�
function fcamelCase��all��letter��{
	return letter.toUpperCase����;
}

//������ת��ΪcamelCase; ��css������ģ��ʹ��
//֧�֣�IE <= 9  -  11����Ե12  -  15
//΢�������ձ����ǵĹ�Ӧ��ǰ׺����9572��
function camelCase��string��{
	return string.replace��rmsPrefix����ms-����.replace��rdashAlpha��fcamelCase��;
}
var acceptData = function��owner��{

	//�����ܣ�
	//  - �ڵ�
	//  -  Node.ELEMENT_NODE
	//  -  Node.DOCUMENT_NODE
	//  - ����
	// - �κ�
	return owner.nodeType === 1 || owner.nodeType === 9 || ����+ owner.nodeType��;
};




function Data����{
	this.expando = jQuery.expando + Data.uid ++;
}

Data.uid = 1;

Data.prototype = {

	cache��function��owner��{

		//��������߶����Ƿ����л���
		var value = owner [this.expando];

		//���û�У��봴��һ��
		if����value��{
			value = {};

			//���ǿ��Խ����ִ�������з�Ԫ�ؽڵ�����ݣ�
			//�����ǲ�Ӧ�ÿ�����8335��
			//ʼ�շ���һ���ն���
			if��acceptData��owner����{

				//�������һ����̫���ܱ��ַ�������ѭ���Ľڵ�
				//ʹ����ͨ��ҵ
				if��owner.nodeType��{
					������[this.expando] =��ֵ;

				//�����䱣���ڷǿ�ö�ٵ�������
				// configurable����Ϊtrue������������
				//ɾ������ʱɾ��
				} else {
					Object.defineProperty��owner��this.expando��{
						��ֵ����ֵ��
						�����ã�true
					}��;
				}
			}
		}

		�ر�ֵ;
	}��
	set��function��owner��data��value��{
		var prop��
			cache = this.cache��owner��;

		//�����[�����ߣ���Կ��ֵ] args
		//ʼ��ʹ��camelCase����gh-2257��
		if��typeof data ===��string����{
			cache [camelCase��data��] = value;

		//�����[�����ߣ�{properties}] args
		} else {

			//������������Ƶ��������
			for�������еĵ��ߣ�{
				cache [camelCase��prop��] = data [prop];
			}
		}
		���ػ���;
	}��
	get��function��owner��key��{
		���ؼ�=== undefined��
			this.cache�������ߣ���

			//ʼ��ʹ��camelCase����gh-2257��
			������[this.expando] && owner [this.expando] [camelCase��key��];
	}��
	access��function��owner��key��value��{

		//�������κ�һ������£�
		//
		// 1.δָ����Կ
		// 2.ָ�����ַ���������δ�ṩ�κ�ֵ
		//
		//���á���ȡ��·��������get����ȷ��
		//Ҫ���ص�ֵ�ֱ�Ϊ��
		//
		// 1.�����������
		// 2.�洢����Կ�е�����
		//
		if��key === undefined ||
				����key && typeof key ===��string����&& value === undefined����{

			return this.get��owner��key��;
		}

		//���������ַ��������߼���ֵ����
		//ʹ��������һ��ʽָ�������û���չ�����ж��󣩣�
		//
		// 1.���ԵĶ���
		// 2.һ���ؼ��ͼ�ֵ
		//
		this.set�������ߣ���Կ��ֵ��;

		//���ڡ�set��·���������������ܵ���ڵ�
		//���ݲ�ȡ��·������Ԥ������[*]
		����ֵ��== undefined����ֵ���ؼ�;
	}��
	remove��function��owner��key��{
		var i��
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
// 5.�������û������Ϲ���ʵ��ϸ�ڣ����磬expando���ԣ�
// 6.Ϊ2014���WeakMapʵʩ�����ṩ��ȷ��;��

var rbrace = / ^������\ {[\ w \ W] * \} | \ [[\ w \ W] * \]��$ /��
	rmultiDash = / [AZ] / g;

function getData��data��{
	if��data ===��true����{
		����true;
	}

	if��data ===��false����{
		����false;
	}

	if��data ===��null����{
		return null;
	}

	//����������ַ��������ת��Ϊ����
	if��data === + data +������{
		����+����;
	}

	if��rbrace.test��data����{
		return JSON.parse��data��;
	}

	��������;
}

function dataAttr��elem��key��data��{
	var name;

	//������ڲ��Ҳ����κ����ݣ��볢�Ի�ȡ�κ�����
	//����HTML5 data- *���Ե�����
	if��data === undefined && elem.nodeType === 1��{
		name =��data-��+ key.replace��rmultiDash���� -  $��������toLowerCase����;
		data = elem.getAttribute��name��;

		if��typeof data ===��string����{
			����{
				data = getData��data��;
			} catch��e��{}

			//ȷ�������������ݣ��Ա��Ժ󲻻����
			dataUser.set��elem��key��data��;
		} else {
			data = undefined;
		}
	}
	��������;
}

jQuery.extend��{
	hasData��function��elem��{
		return dataUser.hasData��elem��|| dataPriv.hasData��elem��;
	}��

	data��function��elem��name��data��{
		return dataUser.access��elem��name��data��;
	}��

	removeData��function��elem��name��{
		dataUser.remove��elem��name��;
	}��

	// TODO�������Ѿ��滻�˶�_data��_removeData�����е���
	//ֱ�ӵ���dataPriv���������Բ��Ƽ�ʹ����Щ������
	_data��function��elem��name��data��{
		return dataPriv.access��elem��name��data��;
	}��

	_removeData��function��elem��name��{
		dataPriv.remove��elem��name��;
	}
}��;

jQuery.fn.extend��{
	data��function��key��value��{
		var i�����ƣ����ݣ�
			elem = this [0]��
			attrs = elem && elem.attributes;

		//��ȡ����ֵ
		if��key === undefined��{
			if��this.length��{
				data = dataUser.get��elem��;

				if��elem.nodeType === 1 &&��dataPriv.get��elem����hasDataAttrs������{
					i = attrs.length;
					���� -  �� {

						//֧�֣�����IE 11
						// attrsԪ�ؿ���Ϊnull����14894��
						if��attrs [i]��{
							name = attrs [i] .name;
							if��name.indexOf����data-����=== 0��{
								name = camelCase��name.slice��5����;
								dataAttr��elem��name��data [name]��;
							}
						}
					}
					dataPriv.set��elem����hasDataAttrs����true��;
				}
			}

			��������;
		}

		//���ö��ֵ
		if��typeof key ===��object����{
			return this.each��function����{
				dataUser.set��this��key��;
			}��;
		}

		return access��this��function��value��{
			var����;

			//����jQuery����Ԫ��ƥ�䣩��Ϊ��
			//�������[0]������һ��Ԫ�أ���
			//`value`����δ���塣һ���յ�jQuery����
			//������elem = this [0]��`undefined`
			//������Զ�ȡ���ݻ��棬���׳��쳣��
			if��elem && value === undefined��{

				//���Դӻ����л�ȡ����
				//��Կ����Զ�������е�camelCased
				data = dataUser.get��elem��key��;
				if��data��== undefined��{
					��������;
				}

				//���ԡ����֡��е�����
				// HTML5�Զ������� -  * attrs
				data = dataAttr��elem��key��;
				if��data��== undefined��{
					��������;
				}

				//����Ŭ�����ԣ������ݲ����ڡ�
				����;
			}

			//��������......
			this.each��function����{

				//�������Ǵ洢camelCased��Կ
				dataUser.set��this��key��value��;
			}��;
		}��null��value��arguments.length> 1��null��true��;
	}��

	removeData��function��key��{
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		//���fx���г��У���ʼ��ɾ������sentinel
		if��fn ===��inprogress����{
			fn = queue.shift����;
			startLength--;
		}

		if��fn��{

			//��ӽ���sentinel�Է�ֹfx���н���
			//�Զ�����
			if��type ===��fx����{
				queue.unshift����inprogress����;
			}

			//������һ������ֹͣ����
			delete hooks.stop;
			fn.call��elem��next��hooks��;
		}

		if����startLength && hooks��{
			hooks.empty.fire����;
		}
	}��

	// not public  - ����queueHooks���󣬻򷵻ص�ǰ����
	_queueHooks��function��elem��type��{
		var key = type +��queueHooks��;
		return dataPriv.get��elem��key��|| dataPriv.access��elem��key��{
			empty��jQuery.Callbacks����once memory������add��function����{
				dataPriv.remove��elem��[type +��queue����key]��;
			}��
		}��;
	}
}��;

jQuery.fn.extend��{
	queue��function��type��data��{
		var setter = 2;

		if��typeof type��==��string����{
			data = type;
			type =��fx��;
			setter--;
		}

		if��arguments.length <setter��{
			return jQuery.queue��this [0]��type��;
		}

		��������=== undefined��
			��� ��
			this.each��function����{
				var queue = jQuery.queue��this��type��data��;

				//ȷ���˶��еĹҹ�
				jQuery._queueHooks��this��type��;

				if��type ===��fx��&& queue [0]��==��inprogress����{
					jQuery.dequeue��this��type��;
				}
			}��;
	}��
	dequeue��function��type��{
		return this.each��function����{
			jQuery.dequeue��this��type��;
		}��;
	}��
	clearQueue��function��type��{
		return this.queue��type ||��fx����[]��;
	}��

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	//��ס��ֵ��Ȼ�������ֵ
	for��ѡ���е����ƣ�{
		old [name] = elem.style [name];
		elem.style [name] = options [name];
	}

	ret = callback.apply��elem��args || []��;

	//�ָ���ֵ
	for��ѡ���е����ƣ�{
		elem.style [name] = old [name];
	}

	����;
};




function adjustCSS��elem��prop��valueParts��tween��{
	var��������ģ��
		maxIterations = 20��
		currentValue =���䣿
			function����{
				return tween.cur����;
			}��
			function����{
				return jQuery.css��elem��prop��������;
			}��
		initial = currentValue������
		unit = valueParts && valueParts [3] || ��jQuery.cssNumber [prop]����������px������

		//Ǳ�ڵĵ�λ��ƥ����Ҫ��ʼֵ����
		initialInUnit =��jQuery.cssNumber [prop] || unit��==��px��&& + initial��&&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay��elem��{
	���£�
		doc = elem.ownerDocument��
		nodeName = elem.nodeName��
		display = defaultDisplayMap [nodeName];

	if��display��{
		������ʾ;
	}

	temp = doc.body.appendChild��doc.createElement��nodeName����;
	display = jQuery.css��temp����display����;

	temp.parentNode.removeChild��temp��;

	if��display ===��none����{
		display =��block��;
	}
	defaultDisplayMap [nodeName] = display;

	������ʾ;
}

function showHide��elements��show��{
	var display��elem��
		values = []��
		index = 0��
		length = elements.length;

	//ȷ����Ҫ���ĵ�Ԫ�ص�����ʾֵ
	for��; index <length; index ++��{
		elem = elements [index];
		if����elem.style��{
			����;
		}

		display = elem.style.display;
		if��show��{

			//��Ϊ����ǿ�ƶԼ�������Ԫ�ؽ��пɼ��ԣ�����������������
			//�ڵ�һ��ѭ������Ҫ��飬���������зǿյ���ʾֵ������
			//�����򼴽��ָ���
			if��display ===��none����{
				values [index] = dataPriv.get��elem����display����|| ��ֵ;
				if����values [index]��{
					elem.style.display =����;
				}
			}
			if��elem.style.display ===����&& isHiddenWithinTree��elem����{
				values [index] = getDefaultDisplay��elem��;
			}
		} else {
			if��display��==��none����{
				values [index] =��none��;

				//��ס����Ҫ���ǵĶ���
				dataPriv.set��elem����display����display��;
			}
		}
	}

	//�ڵڶ���ѭ��������Ԫ�ص���ʾ�Ա��ⲻ�ϵĻ���
	for��index = 0; index <length; index ++��{
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each��function����{
			if��isHiddenWithinTree��this����{
				jQuery��this��.show����;
			} else {
				jQuery��this��.hide����;
			}
		}��;
	}
}��;
var rcheckableType =��/ ^������checkbox | radio��$ / i��;

var rtagName =��/ <��[az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] +��/ i��;

var rscriptType =��/ ^ $ | ^ module $ | \ /������java | ecma��script / i��;



//���Ǳ���ر���Щ��ǩ����֧��XHTML����13200��
var wrapMap = {

	//֧�֣�IE <= 9
	ѡ�[1����<select multiple ='multiple'>������</ select>��]��

	// XHTML��������������ز���Ԫ��
	//������������ķ�ʽ��ͬ���������ǲ�������
	//ͨ��ʡ��<tbody>����������Ԫ�ء�
	thead��[1����<table>������</ table>��]��
	col��[2����<table> <colgroup>������</ colgroup> </ table>��]��
	tr��[2����<table> <tbody>������</ tbody> </ table>��]��
	td��[3����<table> <tbody> <tr>������</ tr> </ tbody> </ table>��]��

	_default��[0������������]
};

//֧�֣�IE <= 9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll��context��tag��{

	//֧�֣�IE <= 9  -  11
	//ʹ��typeof���������������ϵ�������������ã���15151��
	var ret;

	if��typeof context.getElementsByTagName��==��undefined����{
		ret = context.getElementsByTagName��tag ||��*����;

	} else if��typeof context.querySelectorAll��==��undefined����{
		ret = context.querySelectorAll��tag ||��*����;

	} else {
		ret = [];
	}

	if��tag === undefined || tag && nodeName��context��tag����{
		return jQuery.merge��[context]��ret��;
	}

	����;
}


//���ű����Ϊ�Ѿ�������
function setGlobalEval��elems��refElements��{
	var i = 0��
		l = elems.length;

	for��; i <l; i ++��{
		dataPriv.set��
			elems [i]��
			��globalEval��
			��refElements || dataPriv.get��refElements [i]����globalEval����
		��;
	}
}


var rhtml = / <|������\ w +; /;

function buildFragment��elems��context��scripts��selection��ignored��{
	var elem��tmp��tag��wrap��contains��j��
		fragment = context.createDocumentFragment������
		nodes = []��
		i = 0��
		l = elems.length;

	for��; i <l; i ++��{
		elem = elems [i];

		if��elem || elem === 0��{

			//ֱ����ӽڵ�
			if��toType��elem��===��object����{

				//֧�֣�����Android <= 4.0������PhantomJS 1
				// push.apply��_��arraylike���׳����ϵ�WebKit
				jQuery.merge��nodes��elem.nodeType��[elem]��elem��;

			//����htmlת��Ϊ�ı��ڵ�
			} else if����rhtml.test��elem����{
				nodes.push��context.createTextNode��elem����;

			//��htmlת��ΪDOM�ڵ�
			} else {
				tmp = tmp || fragment.appendChild��context.createElement����div������;

				//�����л���׼��ʾ
				tag =��rtagName.exec��elem��|| [����������]��[1] .toLowerCase����;
				wrap = wrapMap [tag] || wrapMap._default;
				tmp.innerHTML = wrap [1] + jQuery.htmlPrefilter��elem��+ wrap [2];

				//ͨ����װ���½�����ȷ������
				j = wrap [0];
				while��j--��{
					tmp = tmp.lastChild;
				}

				//֧�֣�����Android <= 4.0������PhantomJS 1
				// push.apply��_��arraylike���׳����ϵ�WebKit
				jQuery.merge��nodes��tmp.childNodes��;

				//��ס��������
				tmp = fragment.firstChild;

				//ȷ�������Ľڵ��ǹ����ģ���12392��
				tmp.textContent =����;
			}
		}
	}

	//��Ƭ����ɾ����װ��
	fragment.textContent =����;

	i = 0;
	while����elem = nodes [i ++]����{

		//���������ļ��������е�Ԫ�أ�trac-4087��
		if��selection && jQuery.inArray��elem��selection��> -1��{
			if��ignored��{
				ignored.push��elem��;
			}
			����;
		}

		contains = jQuery.contains��elem.ownerDocument��elem��;

		//���ӵ�Ƭ��
		tmp = getAll��fragment.appendChild��elem������script����;

		//�����ű�������ʷ��¼
		if��contains��{
			setGlobalEval��tmp��;
		}

		//�����ִ���ļ�
		if��scripts��{
			j = 0;
			while����elem = tmp [j ++]����{
				if��rscriptType.test��elem.type ||��������{
					scripts.push��elem��;
				}
			}
		}
	}

	����Ƭ��;
}


��function����{
	var fragment = document.createDocumentFragment������
		div = fragment.appendChild��document.createElement����div��������
		input = document.createElement����input����;

	//֧�֣�����Android 4.0  -  4.3
	//������������ƣ����״̬�Ƿ�ʧ����11217��
	//֧�֣�Windows Web Apps��WWA��
	//`name`��`type`����ʹ��.setAttribute for WWA����14901��
	input.setAttribute����type������radio����;
	input.setAttribute����checked������checked����;
	input.setAttribute����name������t����;

	div.appendChild�����룩;

	//֧�֣�Android <= 4.1
	//�Ͼɵ�WebKit������Ƭ������ȷ��¡�Ѽ��״̬
	support.checkClone = div.cloneNode��true��.cloneNode��true��.lastChild.checked;

	//֧�֣�IE <= 11
	//ȷ����ȷ��¡textarea���͸�ѡ��defaultValue
	div.innerHTML =��<textarea> x </ textarea>��;
	support.noCloneChecked = !! div.cloneNode��true��.lastChild.defaultValue;
}������;
var documentElement = document.documentElement;



VAR
	rkeyEvent = / ^ key /��
	rmouseEvent = / ^������mouse | pointer | contextmenu | drag | drop��| click /��
	rtypenamespace = /^([^.]*)(?:\������+��|��/;

function returnTrue����{
	����true;
}

function returnFalse����{
	����false;
}

//֧�֣�IE <= 9
//�й���ϸ��Ϣ������ģ�13393
function safeActiveElement����{
	����{
		return document.activeElement;
	} catch��err��{}
}

����on��elem��types��selector��data��fn��one��{
	var origFn��type;

	//���Ϳ���������/��������ӳ��
	if��typeof types ===��object����{

		//������ - ����ѡ���������ݣ�
		if��typeof selector��==��string����{

			//������ - �������ݣ�
			data = data || ѡ��;
			selector = undefined;
		}
		for��type in types��{
			on��elem��type��selector��data��types [type]��one��;
		}
		����Ԫ��;
	}

	if��data == null && fn == null��{

		//�����ͣ�fn��
		fn =ѡ����;
		data = selector = undefined;
	} else if��fn == null��{
		if��typeof selector ===��string����{

			//�����ͣ�ѡ������fn��
			fn =����;
			data = undefined;
		} else {

			//�����ͣ����ݣ�fn��
			fn =����;
			data = selector;
			selector = undefined;
		}
	}
	if��fn === false��{
		fn = returnFalse;
	} else if����fn��{
		����Ԫ��;
	}

	if��one === 1��{
		origFn = fn;
		fn = function��event��{

			//����ʹ�ÿռ�����Ϊ�¼�������Ϣ
			jQuery������off��event��;
			return origFn.apply��this��arguments��;
		};

		//ʹ����ͬ��guid���Ա�����߿���ʹ��origFnɾ��
		fn.guid = origFn.guid || ��origFn.guid = jQuery.guid ++��;
	}
	return elem.each��function����{
		jQuery.event.add��this��types��fn��data��selector��;
	}��;
}

/ *
 * Helper�������ڹ����¼� - ���ǹ����ӿڵ�һ���֡�
 *ΪDean Edwards��addEvent���ṩ������뷨�ĵ��ߡ�
 * /
jQuery.event = {

	ȫ��{}��

	add��function��elem��types��handler��data��selector��{

		var handleObjIn��eventHandle��tmp��
			events��t��handleObj��
			���⣬����������ͣ������ռ䣬origType��
			elemData = dataPriv.get��elem��;

		//��Ҫ���¼����ӵ�noData��text / comment�ڵ㣨��������ͨ����
		if����elemData��{
			����;
		}

		//�����߿��Դ����Զ������ݵĶ��������洦�����
		if��handler.handler��{
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		//ȷ����Чѡ�����ڸ���ʱ�׳��쳣
		//���elem�Ƿ�Ԫ�ؽڵ㣨���磬�ĵ��������documentElement��ֵ
		if��selector��{
			jQuery.find.matchesSelector��documentElement��selector��;
		}

		//ȷ������������ΨһID���Ժ����ڲ���/ɾ����
		if����handler.guid��{
			handler.guid = jQuery.guid ++;
		}

		//��ʼ��Ԫ�ص��¼��ṹ�����������������ǵ�һ��
		if������events = elemData.events����{
			events = elemData.events = {};
		}
		if������eventHandle = elemData.handle����{
			eventHandle = elemData.handle = function��e��{

				//����jQuery.event.trigger�����͵ĵڶ����¼�
				//��ҳ��ж�غ�����¼�ʱ
				return typeof jQuery��==��undefined��&& jQuery.event.triggered��== e.type��
					jQuery.event.dispatch.apply��elem��arguments����undefined;
			};
		}

		//�����ɿո�ָ��Ķ���¼�
		types =��types ||������.match��rnothtmlwhite��|| [����];
		t = types.length;
		while��t--��{
			tmp = rtypenamespace.exec��types [t]��|| [];
			type = origType = tmp [1];
			namespaces =��tmp [2] ||��������split������������sort����;

			//����*����*��һ�����ͣ�û�и������ƿռ�Ĵ������
			if����type��{
				����;
			}

			//����¼����������ͣ���ʹ�������¼������������������
			special = jQuery.event.special [type] || {};

			//���������ѡ��������ȷ�������¼�api���ͣ������������
			type =��selector��special.delegateType��special.bindType��|| ����;

			//�������������͸�������
			special = jQuery.event.special [type] || {};

			// handleObj�����ݸ������¼��������
			handleObj = jQuery.extend��{
				���ͣ����ͣ�
				origType��origType��
				���ݣ����ݣ�
				handler��handler��
				guid��handler.guid��
				ѡ������ѡ������
				needsContext��selector && jQuery.expr.match.needsContext.test��selector����
				namespace��namespaces.join����������
			}��handleObjIn��;

			//��������ǵ�һ�����������¼�����������
			if������handlers = events [type]����{
				handlers = events [type] = [];
				handlers.delegateCount = 0;

				//��������¼�������򷵻�false�����ʹ��addEventListener
				if����special.setup ||
					special.setup.call��elem��data��namespaces��eventHandle��=== false��{

					if��elem.addEventListener��{
						elem.addEventListener��type��eventHandle��;
					}
				}
			}

			if��special.add��{
				special.add.call��elem��handleObj��;

				if����handleObj.handler.guid��{
					handleObj.handler.guid = handler.guid;
				}
			}

			//��ӵ�Ԫ�صĴ�������б���ǰ��ί��
			if��selector��{
				handlers.splice��handlers.delegateCount ++��0��handleObj��;
			} else {
				handlers.push��handleObj��;
			}

			//��������ʹ�ù���Щ�¼����Խ����¼��Ż�
			jQuery.event.global [type] = true;
		}

	}��

	//��Ԫ���з����¼����¼���
	remove��function��elem��types��handler��selector��mappedTypes��{

		var j��origCount��tmp��
			events��t��handleObj��
			���⣬����������ͣ������ռ䣬origType��
			elemData = dataPriv.hasData��elem��&& dataPriv.get��elem��;

		if����elemData ||����events = elemData.events����{
			����;
		}

		//���������е�ÿ��type.namespaceһ��; ���Ϳ���ʡ��
		types =��types ||������.match��rnothtmlwhite��|| [����];
		t = types.length;
		while��t--��{
			tmp = rtypenamespace.exec��types [t]��|| [];
			type = origType = tmp [1];
			namespaces =��tmp [2] ||��������split������������sort����;

			//ȡ����Ԫ�ص������¼����ڴ������ռ��ϣ�����ṩ��
			if����type��{
				for�������¼���{
					jQuery.event.remove��elem��type + types [t]��handler��selector��true��;
				}
				����;
			}

			special = jQuery.event.special [type] || {};
			type =��selector��special.delegateType��special.bindType��|| ����;
			�������=�¼�[����] || [];
			tmp = tmp [2] &&
				new RegExp������^ | \\������+ namespaces.join����\\����������* \\��|������+����\\��| $������;

			//ɾ��ƥ����¼�
			origCount = j = handlers.length;
			while��j--��{
				handleObj = handlers [j];

				if����mappedTypes || origType === handleObj.origType��&&
					����handler || handler.guid === handleObj.guid��&&
					����tmp || tmp.test��handleObj.namespace����&&
					����selector || selector === handleObj.selector ||
						selector ===��**��&& handleObj.selector����{
					handlers.splice��j��1��;

					if��handleObj.selector��{
						handlers.delegateCount--;
					}
					if��special.remove��{
						special.remove.call��elem��handleObj��;
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		//ɾ�����ݺ�expando���������ʹ������
		if��jQuery.isEmptyObject��events����{
			dataPriv.remove��elem����handle events����;
		}
	}��

	dispatch��function��nativeEvent��{

		//�ӱ����¼����󴴽�һ����д��jQuery.Event
		var event = jQuery.event.fix��nativeEvent��;

		var i��j��ret��matched��handleObj��handlerQueue��
			args = new Array��arguments.length����
			handlers =��dataPriv.get��this����events����|| {}��[event.type] || []��
			special = jQuery.event.special [event.type] || {};

		//ʹ��fix-ed jQuery.Event�����ǣ�ֻ���������¼�
		args [0] =�¼�;

		for��i = 1; i <arguments.length; i ++��{
			args [i] =����[i];
		}

		event.delegateTarget = this;

		//Ϊӳ�����͵���preDispatch�ҹ��������Ҫ����������
		if��special.preDispatch && special.preDispatch.call��this��event��=== false��{
			����;
		}

		//ȷ���������
		handlerQueue = jQuery.event.handlers.call��this��event��handlers��;

		//�����д���; ���ǿ�����ֹͣ���������´���
		i = 0;
		while����matched = handlerQueue [i ++]��&&��event.isPropagationStopped������{
			event.currentTarget = matched.elem;

			j = 0;
			while����handleObj = matched.handlers [j ++]��&&
				��event.isImmediatePropagationStopped������{

				//�����¼�����1��û�������ռ䣬��2���������ռ�
				//һ���Ӽ�����ڰ��¼��е��Ӽ������߶�û�������ռ䣩��
				if����event.rnamespace || event.rnamespace.test��handleObj.namespace����{

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret =����jQuery.event.special [handleObj.origType] || {}����handlele ||
						handleObj.handler��.apply��matched.elem��args��;

					if��ret��== undefined��{
						if����event.result = ret��=== false��{
							event.preventDefault����;
							event.stopPropagation����;
						}
					}
				}
			}
		}

		//Ϊӳ�����͵���postDispatch�ҹ�
		if��special.postDispatch��{
			special.postDispatch.call��this��event��;
		}

		return event.result;
	}��

	�������function��event��handlers��{
		var i��handleObj��sel��matchedHandlers��matchedSelectors��
			handlerQueue = []��
			delegateCount = handlers.delegateCount��
			cur = event.target;

		//����ί�д������
		if��delegateCount &&

			//֧�֣�IE <= 9
			//�ڶ�SVG <use>ʵ������trac-13180��
			cur.nodeType &&

			//֧�֣�Firefox <= 42
			//����ָʾ����ָ�밴ť�Ĺ淶Υ������trac-3861��
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			//֧�֣�����IE 11
			// ...�����Ǽ�ͷ������������ߵ����룬�����С���ť��-1��gh-2343��
			����event.type ===��click��&& event.button> = 1����{

			for��; cur��== this; cur = cur.parentNode || this��{

				//��Ҫ����Ԫ�أ���13208��
				//��Ҫ�����ѽ���Ԫ�صĵ����������6911����8165����11382����11764��
				if��cur.nodeType === 1 &&����event.type ===��click��&& cur.disabled === true����{
					matchedHandlers = [];
					matchedSelectors = {};
					for��i = 0; i <delegateCount; i ++��{
						handleObj = handlers [i];

						//��Ҫ��Object.prototype���Գ�ͻ����13203��
						sel = handleObj.selector +����;

						if��matchedSelectors [sel] === undefined��{
							matchedSelectors [sel] = handleObj.needsContext��
								jQuery��sel��this��.index��cur��> -1��
								jQuery.find��sel��this��null��[cur]����length;
						}
						if��matchedSelectors [sel]��{
							matchedHandlers.push��handleObj��;
						}
					}
					if��matchedHandlers.length��{
						handlerQueue.push��{elem��cur��handlers��matchedHandlers}��;
					}
				}
			}
		}

		//���ʣ��ģ�ֱ�Ӱ󶨵ģ��������
		cur = this;
		if��delegateCount <handlers.length��{
			handlerQueue.push��{elem��cur��handlers��handlers.slice��delegateCount��}��;
		}

		return handlerQueue;
	}��

	addProp��function��name��hook��{
		Object.defineProperty��jQuery.Event.prototype��name��{
			��ö�ٵģ��ǵģ�
			�����ã�true��

			get��isFunction��hook����
				function����{
					if��this.originalEvent��{
							return hook��this.originalEvent��;
					}
				}��
				function����{
					if��this.originalEvent��{
							return this.originalEvent [name];
					}
				}��

			set��function��value��{
				Object.defineProperty��this��name��{
					��ö�ٵģ��ǵģ�
					�����ã�true��
					��д�ģ���ģ�
					��ֵ����ֵ
				}��;
			}
		}��;
	}��

	�޸���function��originalEvent��{
		return originalEvent [jQuery.expando]��
			originalEvent��
			new jQuery.Event��originalEvent��;
	}��

	�ر�{
		load��{

			//��ֹ������image.load�¼���ð�ݵ�window.load
			noBubble���ǵ�
		}��
		���㣺{

			//������ܣ��뼤��ԭ���¼�����ʹģ��/����˳����ȷ
			trigger��function����{
				if��this��== safeActiveElement����&& this.focus��{
					this.focus����;
					����false;
				}
			}��
			delegateType����focusin��
		}��
		ģ����{
			trigger��function����{
				if��this === safeActiveElement����&& this.blur��{
					this.blur����;
					����false;
				}
			}��
			delegateType����focusout��
		}��
		�����{

			//���ڸ�ѡ�򣬴��������¼����Ա���״̬����ȷ��
			trigger��function����{
				if��this.type ===��checkbox��&& this.click && nodeName��this����input������{
					this.click����;
					����false;
				}
			}��

			//���ڿ��������һ���ԣ��벻Ҫ�������ϴ�������.click����
			_default��function��event��{
				return nodeName��event.target����a����;
			}
		}��

		beforeunload��{
			postDispatch��function��event��{

				//֧�֣�Firefox 20+
				//���δ����returnValue�ֶΣ�Firefox���ᷢ��������
				if��event.result��== undefined && event.originalEvent��{
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function��elem��type��handle��{

	//��ͨ������Ҫ�����if��
	if��elem.removeEventListener��{
		elem.removeEventListener��type��handle��;
	}
};

jQuery.Event = function��src��props��{

	//����û��'new'�ؼ��ֵ�ʵ����
	if��������ʵ��ΪjQuery.Event����{
		�����µ�jQuery.Event��src��props��;
	}

	//�¼�����
	if��src && src.type��{
		this.originalEvent = src;
		this.type = src.type;

		//ð���ĵ����¼������ѱ��Ϊ����ֹ
		//��������Ĵ���������; ��ӳ��ȷ�ļ�ֵ��
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				//֧�֣�Android <= 2.3
				src.returnValue === false��
			returnTrue��
			returnFalse;

		//����Ŀ������
		//֧�֣�Safari <= 6  -  7
		//Ŀ�겻Ӧ�����ı��ڵ㣨��504����13143��
		this.target =��src.target && src.target.nodeType === 3����
			src.target.parentNode��
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// �¼�����
	} else {
		this.type = src;
	}

	//����ʽ�ṩ�����Էŵ��¼�������
	if�����ߣ�{
		jQuery.extend��this��props��;
	}

	//���������¼�û��ʱ������봴��һ��ʱ���
	this.timeStamp = src && src.timeStamp || Date.now����;

	//������Ϊ���޸�
	��[jQuery.expando] = true;
};

// jQuery.Event����ECMAScript���԰�ָ����DOM3�¼�
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	���캯����jQuery.Event��
	isDefaultPrevented��returnFalse��
	isPropagationStopped��returnFalse��
	isImmediatePropagationStopped��returnFalse��
	isSimulated��false��

	preventDefault��function����{
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if��e &&��this.isSimulated��{
			e.preventDefault����;
		}
	}��
	stopPropagation��function����{
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if��e &&��this.isSimulated��{
			e.stopPropagation����;
		}
	}��
	stopImmediatePropagation��function����{
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if��e &&��this.isSimulated��{
			e.stopImmediatePropagation����;
		}

		this.stopPropagation����;
	}
};

//�������г������¼����ߣ�����KeyEvent��MouseEvent�ض��ĵ���
jQuery.each��{
	altKey���ǵģ�
	���ݣ���ģ�
	��ȡ���ģ��ǵģ�
	changedTouches���ǵģ�
	ctrlKey���ǵģ�
	ϸ�ڣ��ǵģ�
	eventPhase���ǵģ�
	metaKey���ǵģ�
	pageX���ǵģ�
	pageY���ǵģ�
	shiftKey���ǵģ�
	�۵㣺�ǵģ�
	��char�����ǵģ�
	charCode���ǵģ�
	�ؼ����ǵģ�
	keyCode��true��
	��ť���ǵģ�
	��ť���ǵģ�
	clientX���ǵģ�
	clientY���ǵģ�
	offsetX��true��
	offsetY��true��
	pointerId��true��
	pointerType��true��
	screenX���ǵģ�
	screenY���ǵģ�
	targetTouches���ǵģ�
	toElement���ǵģ�
	�Ӵ�����ģ�

	���У�function��event��{
		var button = event.button;

		//��ӹؼ��¼�
		if��event.which == null && rkeyEvent.test��event.type����{
			return event.charCode��= null��event.charCode��event.keyCode;
		}

		//��ӵ����1 === left; 2 ===��; 3 ===��
		if����event.which && button��== undefined && rmouseEvent.test��event.type����{
			if��button��1��{
				����1;
			}

			if��button��2��{
				����3;
			}

			if��button��4��{
				����2;
			}

			����0;
		}

		return event.which;
	}
��jQuery.event.addProp��;

//ʹ�������ͣ/�˳����¼�ʱ���鴴���������/�뿪�¼�
//�Ա��¼�ί����jQuery�й�����
//��pointerenter / pointerleave��pointerover / pointeroutִ����ͬ����
//
//֧�֣�����Safari 7
// Safari��������mouseenter; ������
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
//��������������Ҳ�����ڽϾɵ�Chrome�汾�У���
jQuery.each��{
	mouseenter����mouseover����
	mouseleave����mouseout����
	pointerenter����ָ�롱��
	pointerleave����ָ�롱
}��function��orig��fix��{
	jQuery.event.special [orig] = {
		delegateType���޸���
		bindType��fix��

		handle��function��event��{
			var ret��
				target = this��
				related = event.relatedTarget��
				handleObj = event.handleObj;

			//����mouseenter / leave���ô�����������أ���Ŀ��֮�⡣
			//ע�⣺�������뿪/������������ڣ��������Ŀ��
			if����related ||��related��== target &&��jQuery.contains��target��related������{
				event.type = handleObj.origType;
				ret = handleObj.handler.apply��this��arguments��;
				event.type = fix;
			}
			����;
		}
	};
}��;

jQuery.fn.extend��{

	on��function��types��selector��data��fn��{
		���أ�this��types��selector��data��fn��;
	}��
	һ�����������ͣ�ѡ���������ݣ�fn��{
		return on��this��types��selector��data��fn��1��;
	}��
	off��function��types��selector��fn��{
		var handleObj��type;
		if��types && types.preventDefault && types.handleObj��{

			//��event������jQuery.Event
			handleObj = types.handleObj;
			jQuery��types.delegateTarget��.off��
				handleObj.namespace��
					handleObj.origType +������ + handleObj.namespace��
					handleObj.origType��
				handleObj.selector��
				handleObj.handler
			��;
			�黹���;
		}
		if��typeof types ===��object����{

			//��types-object [��selector]��
			for��type in types��{
				this.off��type��selector��types [type]��;
			}
			�黹���;
		}
		if��selector === false || typeof selector ===��function����{

			//������[��fn]��
			fn =ѡ����;
			selector = undefined;
		}
		if��fn === false��{
			fn = returnFalse;
		}
		return this.each��function����{
			jQuery.event.remove��this��types��fn��selector��;
		}��;
	}
}��;


VAR

	/ * eslint-disable max-len * /

	//�����https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = / <������area | br | col | embed | hr | img | input | link | meta | param������[az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] *��[^>] *��\ /> / GI��

	/ * eslint-enable * /

	//֧�֣�IE <= 10  -  11������Edge 12  -  13
	//��IE / Edge��ʹ��������ʽ��ᵼ�����صļ��١�
	//�����https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = / <script | <style | <link / i��

	// checked =��ѡ�С���ѡ��
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = / ^ \ s * <��������\ [CDATA \ [|  - ��|������\] \] |  - ��> \ s * $ / g;

//���丸������ѡtbody�԰�������
function manipulationTarget��elem��content��{
	if��nodeName��elem����table����&&
		nodeName��content.nodeType��== 11��content��content.firstChild����tr������{

		����jQuery��elem��.children����tbody����[0] || ELEM;
	}

	����Ԫ��;
}

//�滻/�ָ��ű�Ԫ�ص�type�����Խ��а�ȫ��DOM����
function disableScript��elem��{
	elem.type =��elem.getAttribute����type������== null��+��/��+ elem.type;
	����Ԫ��;
}
function restoreScript��elem��{
	if����elem.type ||������.slice��0,5��===��true /����{
		elem.type = elem.type.slice��5��;
	} else {
		elem.removeAttribute����type����;
	}

	����Ԫ��;
}

function cloneCopyEvent��src��dest��{
	var i��l��type��pdataOld��pdataCur��udataOld��udataCur��events;

	if��dest.nodeType��== 1��{
		����;
	}

	// 1.����˽�����ݣ��¼�����������
	if��dataPriv.hasData��src����{
		pdataOld = dataPriv.access��src��;
		pdataCur = dataPriv.set��dest��pdataOld��;
		events = pdataOld.events;

		if��events��{
			ɾ��pdataCur.handle;
			pdataCur.events = {};

			for�������¼���{
				for��i = 0��l = events [type] .length; i <l; i ++��{
					jQuery.event.add��dest��type��events [type] [i]��;
				}
			}
		}
	}

	// 2.�����û�����
	if��dataUser.hasData��src����{
		udataOld = dataUser.access��src��;
		udataCur = jQuery.extend��{}��udataOld��;

		dataUser.set��dest��udataCur��;
	}
}

//�޸�IE���������֧�ֲ���
function fixInput��src��dest��{
	var nodeName = dest.nodeName.toLowerCase����;

	//�޷����ֿ�¡��ѡ���ѡ��ť���Ѽ��״̬��
	if��nodeName ===��input��&& rcheckableType.test��src.type����{
		dest.checked = src.checked;

	//��¡ѡ��ʱ���޷�����ѡѡ��ص�Ĭ��ѡ��״̬
	} else if��nodeName ===��input��|| nodeName ===��textarea����{
		dest.defaultValue = src.defaultValue;
	}
}

function domManip��collection��args��callback��ignored��{

	//չƽ�κ�Ƕ������
	args = concat.apply��[]��args��;

	varƬ�Σ���һ�����ű���hasScripts��node��doc��
		i = 0��
		l = collection.length��
		iNoClone = l  -  1��
		value = args [0]��
		valueIsFunction = isFunction��value��;

	//�����޷���WebKit�п�¡����checked�Ľڵ�Ƭ��
	if��valueIsFunction ||
			��l> 1 && typeof value ===��string��&&
				��support.checkClone && rchecked.test��value������{
		return collection.each��function��index��{
			var self = collection.eq��index��;
			if��valueIsFunction��{
				args [0] = value.call��this��index��self.html������;
			}
			domManip�����ң�args���ص��������ԣ�;
		}��;
	}

	if��l��{
		fragment = buildFragment��args��collection [0] .ownerDocument��false��collection��ignored��;
		first = fragment.firstChild;

		if��fragment.childNodes.length === 1��{
			fragment = first;
		}

		//��Ҫ�����ݻ�Ա�����Ԫ�ظ���Ȥ���ܵ��ûص�
		if��first || ignored��{
			scripts = jQuery.map��getAll��fragment����script������disableScript��;
			hasScripts = scripts.length;

			//��ԭʼƬ���������һ��
			//�����ǵ�һ������Ϊ�����Խ���
			//��ĳЩ����±��������գ���8070����
			for��; i <l; i ++��{
				node = fragment;

				if��i��== iNoClone��{
					node = jQuery.clone��node��true��true��;

					//�����Կ�¡�ű������ã��Ա��Ժ�ָ�
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove��elem��selector��keepData��{
	var�ڵ㣬
		nodes = selector��jQuery.filter��selector��elem����elem��
		i = 0;

	for��;��node = nodes [i]����= null; i ++��{
		if����keepData && node.nodeType === 1��{
			jQuery.cleanData��getAll��node����;
		}

		if��node.parentNode��{
			if��keepData && jQuery.contains��node.ownerDocument��node����{
				setGlobalEval��getAll��node����script������;
			}
			node.parentNode.removeChild��node��;
		}
	}

	����Ԫ��;
}

jQuery.extend��{
	htmlPrefilter��function��html��{
		return html.replace��rxhtmlTag����<$ 1> </ $ 2>����;
	}��

	clone��function��elem��dataAndEvents��deepDataAndEvents��{
		var i��l��srcElements��destElements��
			clone = elem.cloneNode��true����
			inPage = jQuery.contains��elem.ownerDocument��elem��;

		//�޸�IE��¡����
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for��i = 0��l = srcElements.length; i <l; i ++��{
				fixInput��srcElements [i]��destElements [i]��;
			}
		}

		//���¼���ԭʼ���Ƶ���¡
		if��dataAndEvents��{
			if��deepDataAndEvents��{
				srcElements = srcElements || getAll��elem��;
				destElements = destElements || getAll��clone��;

				for��i = 0��l = srcElements.length; i <l; i ++��{
					cloneCopyEvent��srcElements [i]��destElements [i]��;
				}
			} else {
				cloneCopyEvent��elem��clone��;
			}
		}

		//�����ű�������ʷ��¼
		destElements = getAll��clone����script����;
		if��destElements.length> 0��{
			setGlobalEval��destElements����inPage && getAll��elem����script������;
		}

		//���ؿ�¡�ļ���
		���ؿ�¡;
	}��

	cleanData��function��elems��{
		var data��elem��type��
			special = jQuery.event.special��
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			//��סԭʼֵ
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			//������ֵ�Ի�ȡ����ֵ
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			//�ָ����ĵ�ֵ
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret��== undefined��

		//֧�֣�IE <= 9  -  11
		// IE��zIndexֵ��Ϊ�������ء�
		ret +������
		RET;
}


function addGetHookIf��conditionFn��hookFn��{

	//���平�ӣ����ȷʵ��Ҫ�����ǽ��ڵ�һ������ʱ��顣
	����{
		get��function����{
			if��conditionFn������{

				//����Ҫ���ӣ�������Ϊ��������ʹ����
				//ȱ���������ɾ������
				ɾ��this.get;
				����;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css��elem����boxSizing����false��styles��===��border-box����
		valueIsBorderBox = isBorderBox;

	//֧�֣�Firefox <= 54
	//������Ҫ���ػ����ķ�����ֵ���װ��֪��
	if��rnumnonpx.test��val����{
		if����extra��{
			����;
		}
		val =��auto��;
	}

	//�����������ز��ɿ���ֵ��������ʽ
	//ΪgetComputedStyleĬĬ�ػع鵽�ɿ���elem.style
	valueIsBorderBox = valueIsBorderBox &&
		��support.boxSizingReliable����|| val === elem.style [dimension]��;

	//��ֵΪ��auto��ʱ�����˵�offsetWidth / offsetHeight
	//����û����ȷ���õ�����Ԫ�ػᷢ�����������gh-3571��
	//֧�֣�����Android <= 4.1  -  4.3
	//�����󱨵�����ά�ȣ�gh-3602��Ҳʹ��offsetWidth / offsetHeight
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		��fontWeight�����ǵģ�
		��lineHeight�����ǵģ�
		����͸�������ǵģ�
		�����򡱣��ǵģ�
		���¶������ǵģ�
		���Ѹ������ǵģ�
		��zIndex�����ǵģ�
		�����š����ǵ�
	}��

	//�����ǰҪ�޸������Ƶ�����
	//���û��ȡֵ
	cssProps��{}��

	//��DOM�ڵ��ϻ�ȡ��������ʽ����
	style��function��elem��name��value��extra��{

		//��Ҫ���ı���ע�ͽڵ���������ʽ
		if����elem || elem.nodeType === 3 || elem.nodeType === 8 ||��elem.style��{
			����;
		}

		//ȷ����������ʹ����ȷ������
		var ret��type��hooks��
			origName = camelCase��name����
			isCustomProp = rcustomProp.test��name����
			style = elem.style;

		//ȷ����������ʹ����ȷ�����ơ�����û��
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem [��offset��+ dimension [0] .toUpperCase����+ dimension.slice��1��]  - 
					parseFloat��styles [dimension]�� - 
					boxModelAdjustment��elem��dimension����border����false��styles�� - 
					0.5
				��;
			}

			//�����Ҫ����ֵ��������ת��Ϊ����
			if����ȥ&&��matches = rcssNum.exec��value����&&
				��ƥ��[3] ||��px������==��px����{

				elem.style [dimension] = value;
				value = jQuery.css��elem��dimension��;
			}

			return setPositiveNumber��elem��value��subtract��;
		}
	};
}��;

jQuery.cssHooks.marginLeft = addGetHookIf��support.reliableMarginLeft��
	function��elem��calculated��{
		if��computed��{
			return��parseFloat��curCSS��elem����marginLeft������||
				elem.getBoundingClientRect������left  - 
					swap��elem��{marginLeft��0}��function����{
						return elem.getBoundingClientRect������left;
					}��
				��+��px��;
		}
	}
��;

//����ʹ����Щ��������չ����
jQuery.each��{
	��֤�𣺡�����
	��䣺������
	�߿򣺡���ȡ�
}��function��prefix��suffix��{
	jQuery.cssHooks [prefix + suffix] = {
		expand��function��value��{
			var i = 0��
				expanded = {}��

				//��������ַ����������һ������
				parts = typeof value ===��string����value.split����������[value];

			for��; i <4; i ++��{
				expanded [prefix + cssExpand [i] + suffix] =
					����[i] || ����[i  -  2] || ���[0];
			}

			�ع�����;
		}
	};

	if��ǰ׺��==��margin����{
		jQuery.cssHooks [prefix + suffix] .set = setPositiveNumber;
	}
}��;

jQuery.fn.extend��{
	css��function��name��value��{
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								��nodeName��option.parentNode����optgroup��������{

						//��ȡѡ����ض�ֵ
						value = jQuery��option��.val����;

						//���ǲ���Ҫһ����������һ��ѡ��
						���һ�� �� {
							�ر�ֵ;
						}

						// Multi-Selects����һ������
						values.push��value��;
					}
				}

				�ر�ֵ;
			}��

			set��function��elem��value��{
				var optionSet��option��
					options = elem.options��
					values = jQuery.makeArray��value����
					i = options.length;

				���� -  �� {
					option = options [i];

					/ * eslint-disable no-cond-assign * /

					if��option.selected =
						jQuery.inArray��jQuery.valHooks.option.get��option����values��> -1
					��{
						optionSet = true;
					}

					/ * eslint-enable no-cond-assign * /
				}

				//ǿ������������÷�ƥ��ֵʱ����һ��
				if����optionSet��{
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks [this] .get = function��elem��{
			return elem.getAttribute����value����=== null����on����elem.value;
		};
	}
}��;




//����jQuery�Խ���������


support.focusin =��onfocusin���ڴ�����;


var rfocusMorph = / ^������focusinfocus | focusoutblur��$ /��
	stopPropagationCallback = function��e��{
		e.stopPropagation����;
	};

jQuery.extend��jQuery.event��{

	trigger��function��event��data��elem��onlyHandlers��{

		var i��cur��tmp��bubbleType��ontype��handle��special��lastElement��
			eventPath = [elem || �ļ�]��
			type = hasOwn.call��event����type������event.type��event��
			namespaces = hasOwn.call��event����namespace������event.namespace.split������������[];

		cur = lastElement = tmp = elem = elem || ����;

		//��Ҫ���ı���ע�ͽڵ���ִ���¼�
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if��tmp ===��elem.ownerDocument || document����{
				eventPath.push��tmp.defaultView || tmp.parentWindow || window��;
			}
		}

		//�¼�·���ϵ������������
		i = 0;
		while����cur = eventPath [i ++]��&&��event.isPropagationStopped������{
			lastElement = cur;
			event.type = i> 1��
				bubbleType��
				special.bindType || ����;

			// jQuery�������
			handle =��dataPriv.get��cur����events����|| {}��[event.type] &&
				dataPriv.get��cur����handle����;
			if��handle��{
				handle.apply��cur��data��;
			}

			//ԭ���������
			handle = ontype && cur [ontype];
			if��handle && handle.apply && acceptData��cur����{
				event.result = handle.apply��cur��data��;
				if��event.result === false��{
					event.preventDefault����;
				}
			}
		}
		event.type = type;

		//���û������ֹĬ�ϲ�����������ִ��
		if����onlyHandlers &&��event.isDefaultPrevented������{

			if������special._default ||
				special._default.apply��eventPath.pop������data��=== false��&&
				acceptData��elem����{

				//��Ŀ���ϵ������¼�ͬ���ı���DOM������
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window [callbackName] =����;
			}

			//����Ϊ���
			if��s [callbackName]��{

				//ȷ������ʹ����Щѡ�����ʹ�����ü���
				s.jsonpCallback = originalSettings.jsonpCallback;

				//����ص������Ա�����ʹ��
				oldCallbacks.push��callbackName��;
			}

			//�������һ����������ã�������һ����Ӧ
			if��responseContainer && isFunction�����ǣ���{
				���ǣ�responseContainer [0]��;
			}

			responseContainer = overwritten = undefined;
		}��;

		//ί�ɸ��ű�
		���ء��ű���;
	}
}��;




//֧�֣�����Safari 8
//��Safari 8��ͨ��document.implementation.createHTMLDocument�������ĵ�
//�۵��ֵ���ʽ���ڶ�����Ϊ��һ���ĺ��ӡ�
//��ˣ�������Safari 8�н��ô˰�ȫ��ʩ��
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	//������ǩ
	if���ѽ�����{
		return [context.createElement��parsed [1]��];
	}

	parsed = buildFragment��[data]��context��scripts��;

	if��scripts && scripts.length��{
		jQuery���ű���.remove����;
	}

	return jQuery.merge��[]��parsed.childNodes��;
};


/ **
 *����ַ���ص�ҳ����
 * /
jQuery.fn.load = function��url��params��callback��{
	varѡ���������ͣ���Ӧ��
		����=�����
		off = url.indexOf��������;

	if��off> -1��{
		selector = stripAndCollapse��url.slice��off����;
		url = url.slice��0��off��;
	}

	//�������һ������
	if��isFunction��params����{

		//���Ǽ������ǻص�
		callback = params;
		params = undefined;

	//���򣬹���һ�������ַ���
	} else if��params && typeof params ===��object����{
		type =��POST��;
	}

	//�������Ҫ�޸�Ԫ�أ��뷢������
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );