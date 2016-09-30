package com.mathijsblok.dto;

public class Response {

    private int status;
    private Object content;

    public Response(int status, Object message){
        this.status = status;
        this.content = message;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public Object getContent() {
        return content;
    }

    public void setContent(Object content) {
        this.content = content;
    }
}
