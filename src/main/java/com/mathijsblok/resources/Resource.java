package com.mathijsblok.resources;

import com.mathijsblok.dto.Request;
import com.mathijsblok.dto.Response;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class Resource {

    @ResponseBody
    @RequestMapping(method = RequestMethod.GET)
    public Response get() {
        return new Response(1, "RESPONSE");
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST)
    public Response post(@RequestBody Request request) {
        return new Response(1, request.getContent());
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.PUT)
    public Response put(@RequestBody Request request) {
        return new Response(1, request.getContent());
    }

    @ResponseBody
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public Response delete(@PathVariable("id") Integer id) {
        return new Response(1, id);
    }
}
