package com.kob.backend.controller.pk;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class PkController {

    @GetMapping("/pk/get/")
    public Map<String, String> get() {
        Map<String, String> map = new HashMap<>();
        map.put("name", "chubao");
        map.put("rating", "1500");

        return map;
    }
}
