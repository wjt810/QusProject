package springboot.pojo;

import java.sql.Date;

/**
 * 医生表
 * 
 * @author dell
 *
 */
public class QusDoctor {

	private Integer d_id; // int(11)医生id
	private String d_name; // varchar(50)医生名称
	private String d_password; // varchar(50)密码
	private Integer d_sex; // int(11)0男1女
	private String d_phone; // varchar(50)手机号
	private Date d_startTime; // datetime入职时间
	private Date d_born; // datetime出生日期
	private String d_address; // varchar(50)家庭住址
	private double d_price; // double挂号费用
	private double d_consult; // double咨询费用
	private Integer d_role_id; // int(11)角色id
	private Integer d_r1_id; // int(11)一级科室id
	private Integer d_r2_id; // int(11)二级科室id
	private String d_description; // varchar(50)
	
	private QusRoom1 qusRoom1;  //一级科室
	private QusRoom2 qusRoom2;  //二级科室
	private QusRole qusRole;    //角色名称

	public QusRole getQusRole() {
		return qusRole;
	}

	public void setQusRole(QusRole qusRole) {
		this.qusRole = qusRole;
	}

	public QusRoom1 getQusRoom1() {
		return qusRoom1;
	}

	public void setQusRoom1(QusRoom1 qusRoom1) {
		this.qusRoom1 = qusRoom1;
	}

	public QusRoom2 getQusRoom2() {
		return qusRoom2;
	}

	public void setQusRoom2(QusRoom2 qusRoom2) {
		this.qusRoom2 = qusRoom2;
	}

	public Integer getD_id() {
		return d_id;
	}

	public void setD_id(Integer d_id) {
		this.d_id = d_id;
	}

	public String getD_name() {
		return d_name;
	}

	public void setD_name(String d_name) {
		this.d_name = d_name;
	}

	public String getD_password() {
		return d_password;
	}

	public void setD_password(String d_password) {
		this.d_password = d_password;
	}

	public Integer getD_sex() {
		return d_sex;
	}

	public void setD_sex(Integer d_sex) {
		this.d_sex = d_sex;
	}

	public String getD_phone() {
		return d_phone;
	}

	public void setD_phone(String d_phone) {
		this.d_phone = d_phone;
	}

	public Date getD_startTime() {
		return d_startTime;
	}

	public void setD_startTime(Date d_startTime) {
		this.d_startTime = d_startTime;
	}

	public Date getD_born() {
		return d_born;
	}

	public void setD_born(Date d_born) {
		this.d_born = d_born;
	}

	public String getD_address() {
		return d_address;
	}

	public void setD_address(String d_address) {
		this.d_address = d_address;
	}

	public double getD_price() {
		return d_price;
	}

	public void setD_price(double d_price) {
		this.d_price = d_price;
	}

	public double getD_consult() {
		return d_consult;
	}

	public void setD_consult(double d_consult) {
		this.d_consult = d_consult;
	}

	public Integer getD_role_id() {
		return d_role_id;
	}

	public void setD_role_id(Integer d_role_id) {
		this.d_role_id = d_role_id;
	}

	public Integer getD_r1_id() {
		return d_r1_id;
	}

	public void setD_r1_id(Integer d_r1_id) {
		this.d_r1_id = d_r1_id;
	}

	public Integer getD_r2_id() {
		return d_r2_id;
	}

	public void setD_r2_id(Integer d_r2_id) {
		this.d_r2_id = d_r2_id;
	}

	public String getD_description() {
		return d_description;
	}

	public void setD_description(String d_description) {
		this.d_description = d_description;
	}

}
