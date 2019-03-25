package springboot.controller;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import springboot.pojo.QusDoctor;
import springboot.service.qusappointment.QusAppointmentService;
import springboot.service.qusdoctor.QusDoctorService;
import springboot.service.qusorder.QusOrderService;

@Controller
@RequestMapping("doctor")
public class QusDoctorController {
	Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Resource
	public QusDoctorService qusDoctorService;
	
	@Resource
	public QusAppointmentService qusAppointmentService;
	
	@Resource
	public QusOrderService qusOrderService;
	
	/**
	 * 医生列表
	 * @return
	 */
	@ResponseBody
	@RequestMapping("/doctorList")
	public List<QusDoctor> getDoctorList(){
		List<QusDoctor> doctorList=qusDoctorService.getDoctorList();
		System.out.println("医生姓名\t性别\t入职时间\t工龄\t角色\t挂号费用\t咨询费用\t所属科室");
		for(QusDoctor doctor:doctorList) {
			int time=new Date().getYear()-doctor.getD_startTime().getYear();
			doctor.setWorkTime(time);
			/*System.out.println(doctor.getD_name()+"\t"+doctor.getD_sex()+"\t"+doctor.getD_startTime()
			+"\t"+time+"\t"+doctor.getQusRole().getRole_name()+"\t"+doctor.getD_price()+"\t"+doctor.getD_consult()
			+"\t"+doctor.getQusRoom1().getR1_name()+">"+doctor.getQusRoom2().getR2_name());*/
		}
		return doctorList;
	}
	@ResponseBody
	@RequestMapping(value="/submitAddInfo",method=RequestMethod.POST)
	public String submitAddInfo(HttpServletRequest request) {//,@RequestParam()   ,@RequestParam("picture")MultipartFile fileUpload
		//d_name role sex email phone cDate province city area time room1 room2 description
		String uName = request.getParameter("uName");
		String role = request.getParameter("role");
		String sex = request.getParameter("sex");
		String phone = request.getParameter("phone");
		String province = request.getParameter("province");
		String city = request.getParameter("city");
		String area = request.getParameter("area");
		String time = request.getParameter("time");
		String room1 = request.getParameter("room1");
		String room2 = request.getParameter("room2");
		String description = request.getParameter("description");
		System.out.println("uName \t"+uName+" role:"+role+"\t sex:\t"+sex+"phone:"+phone+"province\t"+province+"city:\t"+city+"\t"+"area:\t"+area+"time:\t"+time+"room1:\t"+room1+"\t room2:"+room2+"description:\t"+description);
		/* //获取文件名
        String fileName = fileUpload.getOriginalFilename();
        System.out.println(fileName);
        //获取文件后缀名
        String suffixName = fileName.substring(fileName.lastIndexOf("."));
        //重新生成文件名
        fileName = UUID.randomUUID()+suffixName;
        //指定本地文件夹存储图片
        String filePath = "C:/Users/zcx/Desktop/毕业项目/test/QusProject/src/main/resources/static/mypicture/";
        try {//
            //将图片保存到static文件夹里
        	System.out.println(filePath+fileName);
            fileUpload.transferTo(new File(filePath+fileName));
        } catch (Exception e) {
            e.printStackTrace();
        	return "back/page/doctor/Doctor.html";
        }*/
        return "back/page/doctor/Doctor.html";
	}
	//deleteById.html
	/**
	 *删除医生
	 */
	@ResponseBody
	@RequestMapping("deleteById.html")
	public int deleteDoctor(HttpServletRequest request) {
		String docIdStr = request.getParameter("docId");
		int result =0;
		int docId =0;
		if(docIdStr!=null && docIdStr !="") {
			docId = Integer.parseInt(docIdStr);
			int appointmentcount = qusAppointmentService.selectAppointmentByDocId(docId);
			int ordercount =qusOrderService.selectOrderByDocId(docId);
			System.out.println("appointmentcount\t"+  appointmentcount);
			System.out.println("ordercount\t"+  ordercount);
			if(appointmentcount<=0&&ordercount<=0) {
				//执行删除
				int deleteUserCount = qusDoctorService.deleteByDocId(docId);
				System.out.println("deleteUserCount \t"+deleteUserCount);
				if(deleteUserCount>0) {
					result = 1;
				}else {
					result = -1;
				}
			}else {
				result = -1;
			}
		} else {
			result = -1;
		}
		return result;
	}
	//实现跳转
	@RequestMapping(value="/upload")
	public String upload() {
		return "test/upload";
	}
	//实现添加图片
	@RequestMapping(value="/upload1")
	public String uploadPic() {
		return "test/upload";
	}
    @RequestMapping(value="upload/uploadPic.do",method=RequestMethod.POST)  //@RequestParam("picture")MultipartFile picture,
    public JSONObject uploadPic(@RequestParam(value="file",required=false) MultipartFile file, HttpServletRequest request, HttpServletResponse response) throws IllegalStateException, IOException {  
    	if(file!=null){
    		String prefix="";
    		String dateStr="";
            String originalName = file.getOriginalFilename();
            System.out.println("fileName:\t"+originalName);
           /* prefix=originalName.substring(originalName.lastIndexOf(".")+1);
             dateStr = format.format(new Date());
            String filepath = request.getServletContext().getRealPath("/static") + uploadDir + dateStr + "." + prefix;
            filepath = filepath.replace("\\", "/");
            File files=new File(filepath);
            //打印查看上传路径
            System.out.println(filepath);
            if(!files.getParentFile().exists()){
                files.getParentFile().mkdirs();
            }
            file.transferTo(files);*/
        }
    	Map<String,Object> map2=new HashMap<>();
        Map<String,Object> map=new HashMap<>();
        map.put("code",0);
        map.put("msg","");
        map.put("data",map2);
    	 return new JSONObject("hello");
    } 
}
