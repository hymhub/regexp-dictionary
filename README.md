# regexp-dictionary
前端常用正则表达式合集，欢迎提交 PR 补充或修改

# 安装
```shell
npm install regexp-dictionary
```
# 使用
```js
import { EMAIL_REG, MOBILE_REG, DOMAIN_REG, WEBSITE_REG } from "regexp-dictionary";
EMAIL_REG.test('test@qq.com') // true
MOBILE_REG.test('13980809090') // true
DOMAIN_REG.test('www.baidu.com') // true
WEBSITE_REG.test('https://www.baidu.com/s?ie=UTF-8&wd=hello%20world') // true
// 更多正则 Ctrl + F 搜索关键字或者往下滑看全部 RegExp 源码

```

# 全部 RegExp 源码
```js
/**
 * 大陆一代身份证号
 */
export const ID_CARD_1_REG = /^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$/;

/**
 * 大陆二代身份证号(通常都用这个)
 */
export const ID_CARD_REG =
  /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;

/**
 * 台湾身份证号
 */
export const TAIWAN_ID_CARD_REG = /^[a-zA-Z][0-9]{9}$/;

/**
 * 澳门身份证号
 */
export const MACAO_ID_CARD_REG = /^[a-zA-Z][0-9]{9}$/;

/**
 * 香港身份证号
 */
export const HONGKONG_ID_CARD_REG = /^[a-zA-Z][0-9]{9}$/;

/**
 * 护照(含澳门/香港)
 */
export const PASSPORT_REG =
  /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/;

/**
 * 出生日期
 */
export const BIRTHDAY_REG =
  /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;

/**
 * 银行卡号
 */
export const BANK_CARD_REG = /^[1-9]\d{9,29}$/;

/**
 * 手机号
 */
export const MOBILE_REG = /^1[3-9]\d{9}$/;

/**
 * 手机号(严谨) 根据工信部2019年最新公布的手机号段
 */
export const MOBILE_STRICT_REG =
  /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;

/**
 * 座机
 */
export const LANDLINE_REG =
  /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/;

/**
 * 国际电话
 */
export const INTERNATIONAL_PHONE_REG = /^\+?[0-9]{6,}$/;

/**
 * 邮箱
 */
export const EMAIL_REG =
  /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;

/**
 * 中文
 */
export const CHINESE_REG = /^(?:[\u4e00-\u9fa5]+)$/;

/**
 * 中文姓名
 */
export const CHINESE_NAME_REG = /^(?:[\u4e00-\u9fa5·]{2,16})$/;

/**
 * 英文姓名
 */
export const ENGLISH_NAME_REG = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;

/**
 * 车牌号(非新能源)
 */
export const CAR_NUMBER_REG =
  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]$/;

/**
 * 车牌号(新能源)
 */
export const E_CAR_NUMBER_REG =
  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z](?:((\d{5}[A-HJK])|([A-HJK][A-HJ-NP-Z0-9][0-9]{4}))|[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳])$/;

/**
 * 车牌号(新能源+非新能源)
 */
export const ALL_CAR_NUMBER_REG =
  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/;

/**
 * QQ号
 */
export const QQ_NUMBER_REG = /^[1-9][0-9]{4,}$/;

/**
 * 微信号
 */
export const WECHAT_NUMBER_REG = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;

/**
 * 微信号(严谨)
 */
export const WECHAT_STRICT_NUMBER_REG = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;

/**
 * 统一社会信用代码
 */
export const SOCIAL_CREDIT_CODE_REG =
  /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/;

/**
 * 营业执照
 */
export const BUSINESS_LICENSE_REG = /^[0-9A-Z]{18}$/;

/**
 * 驾驶证
 */
export const DRIVER_LICENSE_REG =
  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;

/**
 * 火车票
 */
export const TRAIN_TICKET_REG = /^[A-Z]{2}[0-9]{1,4}$/;

/**
 * 火车车次
 */
export const TRAIN_NUMBER_REG = /^[A-Z]{2}[0-9]{1,4}$/;

/**
 * 邮编
 */
export const POST_CODE_REG = /^[1-9][0-9]{5}$/;

/**
 * 股票代码
 */
export const STOCK_CODE_REG = /^[0-9]{6}$/;

/**
 * 股票名称
 */
export const STOCK_NAME_REG = /^[\u4e00-\u9fa5]{2,10}$/;

/**
 * 数字/货币金额 (只支持正数、不支持校验千分位分隔符)
 */
export const MONEY_POSITIVE_REG = /^[1-9]\d*(\.\d{1,2})?$/;

/**
 * 数字/货币金额（支持负数、千分位分隔符）
 */
export const MONEY_REG_COMMA =
  /(?:^[-]?[1-9]\d{0,2}(?:$|(?:,\d{3})*(?:$|(\.\d{1,2}$))))|(?:(?:^[0](\.\d{1,2})?)|(?:^[-][0]\.\d{1,2}))$/;

/**
 * 日期
 */
export const DATE_REG = /^\d{4}-\d{1,2}-\d{1,2}$/;

/**
 * html标签
 */
export const HTML_TAG_REG = /<\/?[^>]*>/g;

/**
 * html注释
 */
export const HTML_COMMENT_REG = /<!--[\s\S]*?-->/g;

/**
 * 版本号 格式必须为X.Y.Z 例如: 18.0.1
 */
export const VERSION_NUMBER_REG = /^\d+(?:\.\d+){2}$/;

/**
 * 网址
 */
export const WEBSITE_REG =
  /^(?:(?:(?:https?|ftp):)?\/\/)?(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

/**
 * ip地址
 */
export const IP_ADDRESS_REG =
  /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

/**
 * 域名
 */
export const DOMAIN_REG =
  /^([a-zA-Z0-9]+[-_]*[a-zA-Z0-9]+)+[.]{1}[a-zA-Z0-9]+[.]{1}[a-zA-Z0-9]+$/;

/**
 * 迅雷链接
 */
export const THUNDER_LINK_REG = /^thunder:\/\/([a-zA-Z0-9]+)([\?|#].*)?$/;

/**
 * 磁力链接
 */
export const MAGNET_LINK_REG = /^magnet:\?xt=urn:btih:([a-zA-Z0-9]+)$/;

/**
 * 子网掩码
 */
export const SUBNET_MASK_REG =
  /^(254|252|248|240|224|192|128|0)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(254|252|248|240|224|192|128|0)$/;

/**
 * mac地址
 */
export const MAC_ADDRESS_REG = /^([0-9a-fA-F]{2})(([/\s:-][0-9a-fA-F]{2}){5})$/;

/**
 * 16进制颜色
 */
export const HEX_COLOR_REG = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

/**
 * rgb颜色
 */
export const RGB_COLOR_REG = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;

/**
 * rgba颜色
 */
export const RGBA_COLOR_REG =
  /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0|1|0\.\d+)\)$/;

/**
 * hsl颜色
 */
export const HSL_COLOR_REG = /^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/;

/**
 * hsla颜色
 */
export const HSLA_COLOR_REG =
  /^hsla\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%,\s*(0|1|0\.\d+)\)$/;

/**
 * windows路径
 */
export const WINDOWS_PATH_REG = /^[a-zA-Z]:\\[^\/\\:*?"<>|\r\n]+$/;

/**
 * linux路径
 */
export const LINUX_PATH_REG = /^\/[^\/\\:*?"<>|\r\n]+$/;

/**
 * 图片链接
 */
export const IMAGE_LINK_REG =
  /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;

/**
 * 视频链接
 */
export const VIDEO_LINK_REG =
  /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;

/**
 * 音频链接
 */
export const AUDIO_LINK_REG =
  /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;

/**
 * 文件链接
 */
export const FILE_LINK_REG =
  /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;

/**
 * 文件名
 */
export const FILE_NAME_REG = /^[^\/\\:*?"<>|\r\n]+$/;

/**
 * git链接
 */
export const GIT_LINK_REG =
  /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;

/**
 * uuid
 */
export const UUID_REG =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

/**
 * uuid/guid
 */
export const UUID_GUID_REG = /^[a-f\d]{4}(?:[a-f\d]{4}-){4}[a-f\d]{12}$/i;

/**
 * 时间戳
 */
export const TIMESTAMP_REG = /^[0-9]{10}$/;

/**
 * md5
 */
export const MD5_REG = /^[0-9a-f]{32}$/;

/**
 * sha1
 */
export const SHA1_REG = /^[0-9a-f]{40}$/;

/**
 * sha256
 */
export const SHA256_REG = /^[0-9a-f]{64}$/;

/**
 * sha512
 */
export const SHA512_REG = /^[0-9a-f]{128}$/;

/**
 * base64
 */
export const BASE64_REG =
  /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i;

/**
 * 数字
 */
export const NUMBER_REG = /(^[\-0-9][0-9]*(.[0-9]+)?)$/;

/**
 * 整数
 */
export const INTEGER_REG = /^-?[0-9]*[1-9][0-9]*$/;

/**
 * 浮点数
 */
export const FLOAT_REG = /^-?[0-9]*[1-9][0-9]*\.[0-9]*$/;

/**
 * 正整数
 */
export const POSITIVE_INTEGER_REG = /^[0-9]*[1-9][0-9]*$/;

/**
 * 正浮点数
 */
export const POSITIVE_FLOAT_REG = /^[0-9]*[1-9][0-9]*\.[0-9]*$/;

/**
 * 负整数
 */
export const NEGATIVE_INTEGER_REG = /^-[0-9]*[1-9][0-9]*$/;

/**
 * 负浮点数
 */
export const NEGATIVE_FLOAT_REG = /^-[0-9]*[1-9][0-9]*\.[0-9]*$/;

/**
 * 数字和字母
 */
export const NUMBER_AND_LETTER_REG = /^[0-9a-zA-Z]*$/;

/**
 * 数字和字母和下划线
 */
export const NUMBER_AND_LETTER_AND_UNDERLINE_REG = /^[0-9a-zA-Z_]*$/;

/**
 * 数字和字母和下划线和点
 */
export const NUMBER_AND_LETTER_AND_UNDERLINE_AND_DOT_REG = /^[0-9a-zA-Z_.]*$/;

/**
 * 数字和字母和下划线和点和横杠
 */
export const NUMBER_AND_LETTER_AND_UNDERLINE_AND_DOT_AND_SLASH_REG =
  /^[0-9a-zA-Z_./]*$/;

/**
 * 数字和字母和下划线和点和横杠和空格
 */
export const NUMBER_AND_LETTER_AND_UNDERLINE_AND_DOT_AND_SLASH_AND_SPACE_REG =
  /^[0-9a-zA-Z_./\s]*$/;

/**
 * 数字和字母和下划线和点和横杠和空格和中文
 */
export const NUMBER_AND_LETTER_AND_UNDERLINE_AND_DOT_AND_SLASH_AND_SPACE_AND_CHINESE_REG =
  /^[0-9a-zA-Z_./\s\u4e00-\u9fa5]*$/;

/**
 * 数字和字母和下划线和点和横杠和空格和中文和英文
 */
export const NUMBER_AND_LETTER_AND_UNDERLINE_AND_DOT_AND_SLASH_AND_SPACE_AND_CHINESE_AND_ENGLISH_REG =
  /^[0-9a-zA-Z_./\s\u4e00-\u9fa5a-zA-Z]*$/;

/**
 * 数字和字母和下划线和点和横杠和空格和中文和英文和空格
 */
export const NUMBER_AND_LETTER_AND_UNDERLINE_AND_DOT_AND_SLASH_AND_SPACE_AND_CHINESE_AND_ENGLISH_AND_SPACE_REG =
  /^[0-9a-zA-Z_./\s\u4e00-\u9fa5a-zA-Z\s]*$/;

/**
 * 数字和字母和下划线和点和横杠和空格和中文和英文和空格和点
 */
export const NUMBER_AND_LETTER_AND_UNDERLINE_AND_DOT_AND_SLASH_AND_SPACE_AND_CHINESE_AND_ENGLISH_AND_SPACE_AND_DOT_REG =
  /^[0-9a-zA-Z_./\s\u4e00-\u9fa5a-zA-Z\s.]*$/;

/**
 * 数字和字母和下划线和点和横杠和空格和中文和英文和空格和点和横杠
 */
export const NUMBER_AND_LETTER_AND_UNDERLINE_AND_DOT_AND_SLASH_AND_SPACE_AND_CHINESE_AND_ENGLISH_AND_SPACE_AND_DOT_AND_SLASH_REG =
  /^[0-9a-zA-Z_./\s\u4e00-\u9fa5a-zA-Z\s./]*$/;

/**
 * 数字和字母和下划线和点和横杠和空格和中文和英文和空格和点和横杠和空格
 */
export const NUMBER_AND_LETTER_AND_UNDERLINE_AND_DOT_AND_SLASH_AND_SPACE_AND_CHINESE_AND_ENGLISH_AND_SPACE_AND_DOT_AND_SLASH_AND_SPACE_REG =
  /^[0-9a-zA-Z_./\s\u4e00-\u9fa5a-zA-Z\s./\s]*$/;

/**
 * 数字和字母和下划线和点和横杠和空格和中文和英文和空格和点和横杠和空格和点
 */
export const NUMBER_AND_LETTER_AND_UNDERLINE_AND_DOT_AND_SLASH_AND_SPACE_AND_CHINESE_AND_ENGLISH_AND_SPACE_AND_DOT_AND_SLASH_AND_SPACE_AND_DOT_REG =
  /^[0-9a-zA-Z_./\s\u4e00-\u9fa5a-zA-Z\s./\s.]*$/;

/**
 * 数字和字母和下划线和点和横杠和空格和中文和英文和空格和点和横杠和空格和点和横杠
 */
export const NUMBER_AND_LETTER_AND_UNDERLINE_AND_DOT_AND_SLASH_AND_SPACE_AND_CHINESE_AND_ENGLISH_AND_SPACE_AND_DOT_AND_SLASH_AND_SPACE_AND_DOT_AND_SLASH_REG =
  /^[0-9a-zA-Z_./\s\u4e00-\u9fa5a-zA-Z\s./\s./]*$/;

/**
 * 数字和字母和下划线和点和横杠和空格和中文和英文和空格和点和横杠和空格和点和横杠和空格
 */
export const NUMBER_AND_LETTER_AND_UNDERLINE_AND_DOT_AND_SLASH_AND_SPACE_AND_CHINESE_AND_ENGLISH_AND_SPACE_AND_DOT_AND_SLASH_AND_SPACE_AND_DOT_AND_SLASH_AND_SPACE_REG =
  /^[0-9a-zA-Z_./\s\u4e00-\u9fa5a-zA-Z\s./\s./\s]*$/;

/**
 * 数字和字母和下划线和点和横杠和空格和中文和英文和空格和点和横杠和空格和点和横杠和空格和点
 */
export const NUMBER_AND_LETTER_AND_UNDERLINE_AND_DOT_AND_SLASH_AND_SPACE_AND_CHINESE_AND_ENGLISH_AND_SPACE_AND_DOT_AND_SLASH_AND_SPACE_AND_DOT_AND_SLASH_AND_SPACE_AND_DOT_REG =
  /^[0-9a-zA-Z_./\s\u4e00-\u9fa5a-zA-Z\s./\s./\s./]*$/;

```