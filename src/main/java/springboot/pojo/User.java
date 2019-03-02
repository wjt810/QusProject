package springboot.pojo;

import java.util.Map;

public class User {

	private Integer puId; // 编号
	private Integer puType; // 用户类型
	private String puCode; // 用户账号
	private String puPassword; // 用户密码
	private String puName; // 用户名称
	private Integer puSex; // 用户性别
	private String puPhone; // 用户电话
	private Integer puIntegral; // 积分
	private Double puPrice; // 用户资费
	private String puPicture; // 用户头像
	private Map<String, Object> map;
	

	@Override
	public String toString() {
		return "User [puId=" + puId + ", puType=" + puType + ", puCode=" + puCode + ", puPassword=" + puPassword
				+ ", puName=" + puName + ", puSex=" + puSex + ", puPhone=" + puPhone + ", puIntegral=" + puIntegral
				+ ", puPrice=" + puPrice + ", puPicture=" + puPicture + "]";
	}

	public Map<String, Object> getMap() {
		return map;
	}

	public void setMap(Map<String, Object> map) {
		this.map = map;
	}

	public Integer getPuId() {
		return puId;
	}

	public void setPuId(Integer puId) {
		this.puId = puId;
	}

	public Integer getPuType() {
		return puType;
	}

	public void setPuType(Integer puType) {
		this.puType = puType;
	}

	public String getPuCode() {
		return puCode;
	}

	public void setPuCode(String puCode) {
		this.puCode = puCode;
	}

	public String getPuPassword() {
		return puPassword;
	}

	public void setPuPassword(String puPassword) {
		this.puPassword = puPassword;
	}

	public String getPuName() {
		return puName;
	}

	public void setPuName(String puName) {
		this.puName = puName;
	}

	public Integer getPuSex() {
		return puSex;
	}

	public void setPuSex(Integer puSex) {
		this.puSex = puSex;
	}

	public String getPuPhone() {
		return puPhone;
	}

	public void setPuPhone(String puPhone) {
		this.puPhone = puPhone;
	}

	public Integer getPuIntegral() {
		return puIntegral;
	}

	public void setPuIntegral(Integer puIntegral) {
		this.puIntegral = puIntegral;
	}

	public Double getPuPrice() {
		return puPrice;
	}

	public void setPuPrice(Double puPrice) {
		this.puPrice = puPrice;
	}

	public String getPuPicture() {
		return puPicture;
	}

	public void setPuPicture(String puPicture) {
		this.puPicture = puPicture;
	}

}
