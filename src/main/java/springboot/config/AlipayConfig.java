package springboot.config;

import java.io.FileWriter;
import java.io.IOException;

/* *
 *类名：AlipayConfig
 *功能：基础配置类
 *详细：设置帐户有关信息及返回路径
 *修改日期：2017-04-05
 *说明：
 *以下代码只是为了方便商户测试而提供的样例代码，商户可以根据自己网站的需要，按照技术文档编写,并非一定要使用该代码。
 *该代码仅供学习和研究支付宝接口使用，只是提供一个参考。
 */

public class AlipayConfig {
	
//↓↓↓↓↓↓↓↓↓↓请在这里配置您的基本信息↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

	// 应用ID,您的APPID，收款账号既是您的APPID对应支付宝账号
	public static String app_id = "2016092700606791";  
	
	// 商户私钥，您的PKCS8格式RSA2私钥
    public static String merchant_private_key = "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCXknzJKEj8Co6funVjA5wVZk9Hq5Mr8L+2ZZZzMEDfCfszBsZg6WxHyzanJp3B0kI6o9qrZj45evTpFRu5wYrMYYWLy0yIWbTd6F+5sM8g5sRrDZSXbcf1fa7DP9uw7NZZ2JCNsQwVx643X5dZGC/7sFu+Yr9AoNp4Suem4V7ea8NDUdO4ONtoRGJtqD54Zi3LJ/DwoIoIo/YOP04jbfH1sMKDrq1DjS6DDSi/0BmiA55xywg/8ebWaIDg6sHA3wCIYWNMbYY5edoqDWKvcSF095HyCzar2gwehQDHmaLKPxLxe/k5Lwj7LxG+QKA2yRk+Bru4pFu8tHqIzy/xa/LXAgMBAAECggEAXsGyh2NK9V54OX0s48Ce9HXofErUD/VLNPEfdFWnSIiJ5SWIIY/sJJnzSd4HY+NZiiVjkCG0JuUqdQjAM4m+hvU0sudeqiNCwjQCnCjf5JbAFpj/2wdDqcJv3hpu8pWtj6+m9x3HC1qxHGcDTCyl2rgvMr+zBulIi0lwttBQKcXEH96d/ObF6Fk9tCsyY1ulFppnoYeipMdlJ32x5VRyK/DUbvP1NqM6sVQrGdiEz/Dc/jtsayShWeMngtBST8t8LUBunYUtRJGflm5DtjkvxFo8pFnBa8Xt+Fj1wrEOjpYeIgLKU2BrFqkuXMO/hwkf1EVGgQ+0DTumZn2lupwo+QKBgQDuS2vsmhcZHhqvM6vJzH8G7HCLwo8RDJIdBa6D0KktQFH7OAP9zAGDHR/ngalTCrS8s7pyuK8qygof+pbnJ09PE7IywdUjWeqtGiON8BhymMRz5tPr6xHOZzHnUQwOExLq6C9R6NvOwzXTbSLRQ595cQihZe1YjHAZ9cTxb9D0ZQKBgQCi1YcUQ8xaESIu3Affy6aEMxpnmTTheQX+wVq6OKLRcK0ZT/nDXTmSHSwUPGxNjuTHiunVjScNKSn9dtCWn6X/97U1I/STRj0XQVN4dOkpvhbIADEDjNTaD1UpJgg1fLCyksTs6BLN50sopeSaalH9Pe/FRNLV5RU5M+voPYZAiwKBgDHWznTG6avUMwqPyQ9E2RCOpR9mCtwq/+hYBt8E5k1TlZHwbk1HvM06azDVWp/GrnSFNqrF28UcSq/Tjno8K4dDfFLHXZeuN7oKrIMEQ2i8cOI41fwSxz+fL73MorPS43MEKtl71XVSONDGk7Cm7xTMQlzXX6PUg6G6WH2SwGZNAoGBAIVjkbICEAa//laQnEqyEwg8rKatFGqXr1ePoPjnqEkVmlcf8qQdXCnbh95T2Qx3v+XOX9s2NAVN8T3W9OxOf7d9fY24lIOIiEbilrQYYWB2fUb9ESmtVjgDU2nP4+2c5UqDfJntSmotzJ3Rt8De06c185KP3H6nmIkxhVDMBYwdAoGBAJo2gijeoCBOTrOGeDtaHJYencnyEpaTUybt4cqYf5vKQiVhChsN/jYZI6ZKvnt4145gN0wxW6oWzubFRF+L+woleD8ZYcUlzYDDBmPGu+DGFpu7+8B3L60zN9/Tpk2cXPhT3JgKxchvrH3Humvpp0huDKMWR41kE7oXmeJH0WyN";
	
	// 支付宝公钥,查看地址：https://openhome.alipay.com/platform/keyManage.htm 对应APPID下的支付宝公钥。
    public static String alipay_public_key = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsSIDENP/kPOjDLdCzCiZw2PlSHQAOnykYJU6315mlg/XX/CEO/Z30nAqpL3G+lLTB3tPu/FNL4aBIn+A7crLH28X95RZKqm8VitJ+vxWLkUWtjX2sD60TbIOYs4Pn5RqDKHx/EHapfxNe7RSRxZ+uUnHJ8i2NTvdfKaJKNF36CnNIGNs3lilPPPtKmN3zUc0lcORAeTcKasV/yxLdBd6lDVI+LacReatgFnY31J4d8vD5B3S0baFYqn1CWAw1ISxEd3yEzY0vtDRjUA4Z5ONFPFDNvXQXi59DWYbL58PEYT2+MKphEajFvIaiCEwDTLcdzgR4y6zfH2iN0ghb2GeVQIDAQAB";

	// 服务器异步通知页面路径  需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问     aaa
	public static String notify_url = "http://localhost:8080/Test/notify_url.jsp";//alipay.trade.page.pay-JAVA-UTF-8

	// 页面跳转同步通知页面路径 需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问  aaa
	public static String return_url = "http://localhost:8080/Test/return_url.jsp";

	// 签名方式  a
	public static String sign_type = "RSA2";
	
	// 字符编码格式  aaa
	public static String charset = "utf-8";
	
	// 支付宝网关  
	public static String gatewayUrl = "https://openapi.alipaydev.com/gateway.do";//https://openapi.alipay.com/gateway.do
	
	// 支付宝网关  aaa
	public static String log_path = "C:\\";
	
	/**
	 * 商户应用私钥
	 * MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCXknzJKEj8Co6funVjA5wVZk9Hq5Mr8L+2ZZZzMEDfCfszBsZg6WxHyzanJp3B0kI6o9qrZj45evTpFRu5wYrMYYWLy0yIWbTd6F+5sM8g5sRrDZSXbcf1fa7DP9uw7NZZ2JCNsQwVx643X5dZGC/7sFu+Yr9AoNp4Suem4V7ea8NDUdO4ONtoRGJtqD54Zi3LJ/DwoIoIo/YOP04jbfH1sMKDrq1DjS6DDSi/0BmiA55xywg/8ebWaIDg6sHA3wCIYWNMbYY5edoqDWKvcSF095HyCzar2gwehQDHmaLKPxLxe/k5Lwj7LxG+QKA2yRk+Bru4pFu8tHqIzy/xa/LXAgMBAAECggEAXsGyh2NK9V54OX0s48Ce9HXofErUD/VLNPEfdFWnSIiJ5SWIIY/sJJnzSd4HY+NZiiVjkCG0JuUqdQjAM4m+hvU0sudeqiNCwjQCnCjf5JbAFpj/2wdDqcJv3hpu8pWtj6+m9x3HC1qxHGcDTCyl2rgvMr+zBulIi0lwttBQKcXEH96d/ObF6Fk9tCsyY1ulFppnoYeipMdlJ32x5VRyK/DUbvP1NqM6sVQrGdiEz/Dc/jtsayShWeMngtBST8t8LUBunYUtRJGflm5DtjkvxFo8pFnBa8Xt+Fj1wrEOjpYeIgLKU2BrFqkuXMO/hwkf1EVGgQ+0DTumZn2lupwo+QKBgQDuS2vsmhcZHhqvM6vJzH8G7HCLwo8RDJIdBa6D0KktQFH7OAP9zAGDHR/ngalTCrS8s7pyuK8qygof+pbnJ09PE7IywdUjWeqtGiON8BhymMRz5tPr6xHOZzHnUQwOExLq6C9R6NvOwzXTbSLRQ595cQihZe1YjHAZ9cTxb9D0ZQKBgQCi1YcUQ8xaESIu3Affy6aEMxpnmTTheQX+wVq6OKLRcK0ZT/nDXTmSHSwUPGxNjuTHiunVjScNKSn9dtCWn6X/97U1I/STRj0XQVN4dOkpvhbIADEDjNTaD1UpJgg1fLCyksTs6BLN50sopeSaalH9Pe/FRNLV5RU5M+voPYZAiwKBgDHWznTG6avUMwqPyQ9E2RCOpR9mCtwq/+hYBt8E5k1TlZHwbk1HvM06azDVWp/GrnSFNqrF28UcSq/Tjno8K4dDfFLHXZeuN7oKrIMEQ2i8cOI41fwSxz+fL73MorPS43MEKtl71XVSONDGk7Cm7xTMQlzXX6PUg6G6WH2SwGZNAoGBAIVjkbICEAa//laQnEqyEwg8rKatFGqXr1ePoPjnqEkVmlcf8qQdXCnbh95T2Qx3v+XOX9s2NAVN8T3W9OxOf7d9fY24lIOIiEbilrQYYWB2fUb9ESmtVjgDU2nP4+2c5UqDfJntSmotzJ3Rt8De06c185KP3H6nmIkxhVDMBYwdAoGBAJo2gijeoCBOTrOGeDtaHJYencnyEpaTUybt4cqYf5vKQiVhChsN/jYZI6ZKvnt4145gN0wxW6oWzubFRF+L+woleD8ZYcUlzYDDBmPGu+DGFpu7+8B3L60zN9/Tpk2cXPhT3JgKxchvrH3Humvpp0huDKMWR41kE7oXmeJH0WyN
	 */
	
	/**
	 * 商户公钥
	 * MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAl5J8yShI/AqOn7p1YwOcFWZPR6uTK/C/tmWWczBA3wn7MwbGYOlsR8s2pyadwdJCOqPaq2Y+OXr06RUbucGKzGGFi8tMiFm03ehfubDPIObEaw2Ul23H9X2uwz/bsOzWWdiQjbEMFceuN1+XWRgv+7BbvmK/QKDaeErnpuFe3mvDQ1HTuDjbaERibag+eGYtyyfw8KCKCKP2Dj9OI23x9bDCg66tQ40ugw0ov9AZogOeccsIP/Hm1miA4OrBwN8AiGFjTG2GOXnaKg1ir3EhdPeR8gs2q9oMHoUAx5miyj8S8Xv5OS8I+y8RvkCgNskZPga7uKRbvLR6iM8v8Wvy1wIDAQAB
	 */


//↑↑↑↑↑↑↑↑↑↑请在这里配置您的基本信息↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    /** 
     * 写日志，方便测试（看网站需求，也可以改成把记录存入数据库）
     * @param sWord 要写入日志里的文本内容
     */
    public static void logResult(String sWord) {
        FileWriter writer = null;
        try {
            writer = new FileWriter(log_path + "alipay_log_" + System.currentTimeMillis()+".txt");
            writer.write(sWord);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (writer != null) {
                try {
                    writer.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}

