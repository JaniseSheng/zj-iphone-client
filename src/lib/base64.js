import md5 from 'md5';

/* eslint-disable */

function Base64() {

  // private property

  var base64Chars = 'KLNxOPSTefgXYMhikWjlnmCFrRt2QusDvGIHV3Z8-acd/9JopqBEwyz1A4U57b60';
  // public method for encoding
  this.encode = function(input) {
    var output = "";
    var chr1,
      chr2,
      chr3,
      enc1,
      enc2,
      enc3,
      enc4;
    var i = 0;
    input = this._utf8_encode(input);
    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      output = output + base64Chars.charAt(enc1) + base64Chars.charAt(enc2) + base64Chars.charAt(enc3) + base64Chars.charAt(enc4);
    }
    return output;
  }

  // public method for decoding
  this.decode = function(input) {
    var output = "";
    var chr1,
      chr2,
      chr3;
    var enc1,
      enc2,
      enc3,
      enc4;
    var i = 0;
    input = input.replace(/[^A-Za-z0-9\-\/]/g, "");
    while (i < input.length) {
      enc1 = base64Chars.indexOf(input.charAt(i++));
      enc2 = base64Chars.indexOf(input.charAt(i++));
      enc3 = base64Chars.indexOf(input.charAt(i++));
      enc4 = base64Chars.indexOf(input.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }
    output = this._utf8_decode(output);
    return output;
  }

  // private method for UTF-8 encoding
  this._utf8_encode = function(string) {
    var string = string.replace(/\r\n/g, "\n");
    var utftext = "";
    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if ((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }

    }
    return utftext;
  }

  // private method for UTF-8 decoding
  this._utf8_decode = function(utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;
    while (i < utftext.length) {
      c = utftext.charCodeAt(i);
      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if ((c > 191) && (c < 224)) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }
    }
    return string;
  }
}

export const xt_encode = function(code) { //对字符串进行加密
  var c = String.fromCharCode(code.charCodeAt(0) + code.length);
  for (var i = 1; i < code.length; i++) {
    c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
  }
  return escape(c);
}

//字符串进行解密
export const xt_decode = function(code) {
  code = unescape(code);
  var c = String.fromCharCode(code.charCodeAt(0) - code.length);
  for (var i = 1; i < code.length; i++) {
    c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
  }
  return c;
}

//md5加密
export const md5Encode = function(parmar) {
  var base = new Base64().encode(parmar);
  var currentTime = new Date().getTime();
  var md5Code = md5(currentTime + base + 'weioroweorkgudfkjerkw');
  return 'data=' + base + '&time=' + currentTime + '&sign=' + md5Code;
}
