package springboot;


import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Calendar;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
@RunWith(SpringRunner.class)
@SpringBootTest
public class QusProjectApplicationTests {

	@Test
	public void testJiaMi() {
		/*String str="hello";
		try {
			//base64加密
			str=baseEncode(str.getBytes());
			System.out.println("加密："+str);
			//base64解密
			byte[] result = base64DeCode(str);
			System.out.println(new String("解密："+result));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}*/
		 Calendar cal = Calendar.getInstance(); 
		 System.out.println(cal.get(Calendar.YEAR)); 
	}
	//base64加密
	public static String baseEncode(byte[] input) throws ClassNotFoundException, NoSuchMethodException, SecurityException, IllegalAccessException, IllegalArgumentException, InvocationTargetException {
		//1.获取反射入口(用clasz对象来操作Base64)
		Class<?> clasz = Class.forName("com.sun.org.apache.xerces.internal.impl.dv.util.Base64");
		//2.获取该方法    
		Method method = clasz.getMethod("encode", byte[].class);//第一个参数：方法名；第二个参数：参数类型.class(转换为对象类型)
		//3.调用方法(加密之后就是一个String)
		String invoke = (String)method.invoke(null, input);//对象  ，Person p = new Person();如果是静态方法则不需要对象
		return invoke;
	}
		//base64解密
		public static byte[] base64DeCode(String input) throws ClassNotFoundException, IllegalAccessException, IllegalArgumentException, InvocationTargetException {
			Class classz=Class.forName("com.sun.org.apache.xerces.internal.impl.dv.util.Base64");
			Method method=null;
			try {
				method = classz.getMethod("decode",String.class);
			} catch (NoSuchMethodException | SecurityException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			byte[] invoke = (byte[]) method.invoke(null, input);
			return invoke;
		}
}
