package utils;

public class Constant {

    /**
     * Config properties file
     **/

    public static final String CONFIG_PROPERTIES_DIRECTORY = System.getProperty("user.dir") + "\\properties\\config.properties";
    public static final String GECKO_DRIVER_DIRECTORY = System.getProperty("user.dir") + "\\resources\\geckodriver.exe";
    public static final String CHROME_DRIVER_DIRECTORY = System.getProperty("user.dir") + "\\resources\\chromedriver.exe";
    public static final String IE_DRIVER_DIRECTORY = System.getProperty("user.dir") + "\\resources\\IEDriverServer.exe";

    public static void main(String[] args) {
        System.out.println(CONFIG_PROPERTIES_DIRECTORY);
    }


}
