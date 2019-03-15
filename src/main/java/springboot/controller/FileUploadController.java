package springboot.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class FileUploadController {
	private static final Logger log = LoggerFactory.getLogger(FileUploadController.class);
	//实现页面的跳转
	@RequestMapping(value="uploadPath")
	public String skip() {
		return "upLoad";
	}
	
    @RequestMapping(value="upload/uploadPic.do",method=RequestMethod.POST)  
    public void uploadPic(@RequestParam("picture")MultipartFile picture, HttpServletRequest request, HttpServletResponse response) throws IllegalStateException, IOException {  
    	System.out.println("aa");
    	try {  
            // 获取图片原始文件名  
            String originalFilename = picture.getOriginalFilename();  
            System.out.println(originalFilename);  
            // 文件名使用当前时间  
            String name = new SimpleDateFormat("yyyyMMddHHmmssSSS").format(new Date());  
            // 获取上传图片的扩展名(jpg/png/...)  
           // String extension = FilenameUtils.getExtension(originalFilename);  
            // 图片上传的相对路径（因为相对路径放到页面上就可以显示图片）  
            String path = "/upload1/" + name + "." + ".jpg";  
            // 图片上传的绝对路径  
            String url = request.getSession().getServletContext().getRealPath("") + path;  
            System.out.println(url);
                File dir = new File(url);  
            if(!dir.exists()) {  
            	dir.mkdirs();  
            }
            // 上传图片 
            picture.transferTo(new File(url));  
            // 将相对路径写回（json格式）  
            org.json.JSONObject jsonObject = new org.json.JSONObject();  
            // 将图片上传到本地  
            jsonObject.put("path", path);  
            // 设置响应数据的类型json  
            response.setContentType("application/json; charset=utf-8");  
            // 写回  
            response.getWriter().write(jsonObject.toString());  
        } catch (Exception e) {  
            throw new RuntimeException("服务器繁忙，上传图片失败");  
        }  
    } 
}
