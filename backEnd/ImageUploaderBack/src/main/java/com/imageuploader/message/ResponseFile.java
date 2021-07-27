package com.imageuploader.message;

public class ResponseFile {
	private String name;
	private String url;
	private String type;
	private String id;
	private long size;
	
	public ResponseFile(String name, String url, String type, long size, String id) {
		super();
		this.name = name;
		this.url = url;
		this.type = type;
		this.size = size;
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getUrl() {
		return url;
	}
	
	public void setUrl(String url) {
		this.url = url;
	}
	
	public String getType() {
		return type;
	}
	
	public void setType(String type) {
		this.type = type;
	}
	
	public long getSize() {
		return size;
	}
	
	public void setSize(long size) {
		this.size = size;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
}
