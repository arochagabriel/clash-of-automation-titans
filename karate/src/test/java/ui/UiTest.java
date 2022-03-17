package ui;
import com.intuit.karate.junit5.Karate;

class UiTest {

    @Karate.Test
    Karate testSample() {
        return Karate.run("classpath:ui").tags("@uiautomatedtests");
    }
}