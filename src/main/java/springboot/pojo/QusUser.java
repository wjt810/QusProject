package springboot.pojo;

public class QusUser {

	/*
	 * test  --lyd
	 */
	private Integer u_id; // int(11)
	private String u_name; // varchar(50)名字
	private String u_password; // varchar(50)密码
	private Integer u_sex; // int(11)0男1女
	private String u_card; // varchar(50)身份证
	private String u_phone; // varchar(50)手机号
	private Integer u_role_id; // int(11)角色表id   
	private Integer u_sta_id;  //状态Id
	
	
	private QusStatus qusStatus;  //状态表
	
	public QusStatus getQusStatus() {
		return qusStatus;
	}

	public void setQusStatus(QusStatus qusStatus) {
		this.qusStatus = qusStatus;
	}

	public Integer getU_sta_id() {
		return u_sta_id;
	}

	public void setU_sta_id(Integer u_sta_id) {
		this.u_sta_id = u_sta_id;
	}

	public Integer getU_id() {
		return u_id;
	}

	public void setU_id(Integer u_id) {
		this.u_id = u_id;
	}

	public String getU_name() {
		return u_name;
	}

	public void setU_name(String u_name) {
		this.u_name = u_name;
	}

	public String getU_password() {
		return u_password;
	}

	public void setU_password(String u_password) {
		this.u_password = u_password;
	}

	public Integer getU_sex() {
		return u_sex;
	}

	public void setU_sex(Integer u_sex) {
		this.u_sex = u_sex;
	}

	public String getU_card() {
		return u_card;
	}

	public void setU_card(String u_card) {
		this.u_card = u_card;
	}

	public String getU_phone() {
		return u_phone;
	}

	public void setU_phone(String u_phone) {
		this.u_phone = u_phone;
	}

	public Integer getU_role_id() {
		return u_role_id;
	}

	public void setU_role_id(Integer u_role_id) {
		this.u_role_id = u_role_id;
	}

}
