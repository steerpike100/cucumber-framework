package utils;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class ReadConfigFile {

    protected InputStream input;
    protected Properties prop = null;
    BufferedReader reader;


    public ReadConfigFile() {
        try {
//            input = ReadConfigFile.class.getClassLoader().getResourceAsStream(Constant.CONFIG_PROPERTIES_DIRECTORY);
//            prop = new Properties();
//            prop.load(input);
        reader = new BufferedReader(new FileReader(Constant.CONFIG_PROPERTIES_DIRECTORY));
            prop = new Properties();
            prop.load(reader);

        } catch (IOException e) {
            e.printStackTrace();

        }
    }

    public String getBrowser() {
        if (prop.getProperty("browser") == null)
            return "";
        return prop.getProperty("browser");
    }

}
