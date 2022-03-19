package api;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ApiTestParallel {

    @Test
    void apiTestParallel() {
        Results results = Runner.path("classpath:api/go-rest.feature").parallel(10);
        assertEquals(0, results.getFailCount(), results.getErrorMessages());

    }
}