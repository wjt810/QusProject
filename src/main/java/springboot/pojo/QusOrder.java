package springboot.pojo;

public class QusOrder {

	private Integer o_id; // int(11)订单id
	private Integer o_doc_id; // int(11)医生id
	private Integer o_user_id; // int(11)用户id
	private Integer o_app_id; // int(11)预约表id
	private double o_price; // double订单费用
	private Integer o_status; // int(11)订单状态(0已付款1已取消2已完成)
	private Integer o_type; // int(11)订单类型(0挂号1咨询)

	public Integer getO_id() {
		return o_id;
	}

	public void setO_id(Integer o_id) {
		this.o_id = o_id;
	}

	public Integer getO_doc_id() {
		return o_doc_id;
	}

	public void setO_doc_id(Integer o_doc_id) {
		this.o_doc_id = o_doc_id;
	}

	public Integer getO_user_id() {
		return o_user_id;
	}

	public void setO_user_id(Integer o_user_id) {
		this.o_user_id = o_user_id;
	}

	public Integer getO_app_id() {
		return o_app_id;
	}

	public void setO_app_id(Integer o_app_id) {
		this.o_app_id = o_app_id;
	}

	public double getO_price() {
		return o_price;
	}

	public void setO_price(double o_price) {
		this.o_price = o_price;
	}

	public Integer getO_status() {
		return o_status;
	}

	public void setO_status(Integer o_status) {
		this.o_status = o_status;
	}

	public Integer getO_type() {
		return o_type;
	}

	public void setO_type(Integer o_type) {
		this.o_type = o_type;
	}

}
