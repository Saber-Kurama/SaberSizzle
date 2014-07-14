/*
 * css 选择 引擎
 */
 /*
  *闭包
  */
 (function(window){
 	var 
 		support,
 		tokenize,

 		contains,

 		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf if we can't use a native one
		indexOf = arr.indexOf || function( elem ) {
			var i = 0,
				len = this.length;
			for ( ; i < len; i++ ) {
				if ( this[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

 		perferredDoc = window.document;
 	
 	// 定义一个正则表达式
 	var rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
 	// 选择 
 	/*
 	 *
 	 * results 结果集
 	 * seed  过滤集
 	 */
 	function SaberSizzle(selector,context,results,seed){
 		var match,elem,m,nodeType;

/* 		if( (context ? context.ownerDocumnet || context : perferredDoc) != document){
 			setDocument(context);
 		}*/
 		//debugger;
 		// 首先 设置 默认的 context 为 document
 		context = window.document;
 		context = context || window.document;
		results = results || [];
 		// 判断是否是字符串
 		if(!selector || typeof selector !=="string"){
 			return  null;
 		}
 		// 如果 context 不是一个 element 或者 是根节点
 		if ( (nodeType = context.nodeType) !=1 && nodeType !==9) {
 			//  setDocumnet ( context )
 			context = window.document;
 		};
 		// 如果 不需要过滤
 		if(!seed){
	 		// 根据字符串 来判断 是id 还是 class 还是 tag
	 		if( (match = rquickExpr.exec(selector)) ){
	 			// 如果 是id ("#ID")
	 			if( (m = match[1])){
	 				if(nodeType === 9){
	 					elem = context.getElementById( m );
	 					//Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document (jQuery #6963)
						// 不是很理解的  难道 黑莓 系统的独特？
						if( elem && elem.parentNode){
							// Handle the case where IE, Opera, and Webkit return items
							// by name instead of ID
							if(elem.id === m){
								results.push( elem );
								return results;
							}
						}else{
							return results;
						}
	 				} else {
	 					// context 不是 document
	 					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m ) &&
	 						 contains( context , elem) && elem.id === m){
	 							results.push(elem);
	 							return results;
	 					};
	 				}
	 				
	 			// ("TAG")
	 			}else if( (m = match[2]) {
	 				push.apply(results,context.getElementsByTagName(selector));
	 				return results;
	 			// (".CLASS")	
	 			}else if( (m = match[3]) && context.getElementsByClassName){
	 				push.apply( results, context.getElementsByClassName( m ) );
					return results;
	 			}

	 		}

	 		// QSA paht
	 		if( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ){

	 		}
 		}

 	}
 	// Expose support vars for convenience
	support = Sizzle.support = {};
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocumnet = Sizzle.setDocumnet = function(node){

	}	
 	tokenize = SaberSizzle.tokenize = function(){

 	}
 	
 	// 添加支持模块快 AMD
 	if (typeof define === "function" && define.amd){
 		define(function(){
 			return SaberSizzle;
 		})
 	// 如果是采用的 (类似是nodejs 中的模块 则按照下面返回)
 	} else if(typeof module !== "undefined" && module.exports){
 		module.exports = SaberSizzle;
 	} else{
 		window.SaberSizzle = SaberSizzle;
 	}
 })(window)