package com.mathijsblok.resources;

import com.mathijsblok.dto.Response;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class Resource {

    @ResponseBody
    @RequestMapping(method = RequestMethod.GET)
    public Response get() {
        return new Response(1, "RESPONSE");
    }
}
