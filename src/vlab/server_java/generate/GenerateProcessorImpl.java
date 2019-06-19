package vlab.server_java.generate;

import rlcp.generate.GeneratingResult;
import rlcp.server.processor.generate.GenerateProcessor;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

import vlab.server_java.model.AnswerModel;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


/**
 * Simple GenerateProcessor implementation. Supposed to be changed as needed to
 * provide necessary Generate method support.
 */
public class GenerateProcessorImpl implements GenerateProcessor {

    private static final String[][] VARIANTS = {{"746", "751", "749", "686", "698", "669", "658", "663", "762", "844", "760", "776", "807", "773", "690", "700", "777", "761", "810", "818", "779", "806", "779", "725", "770", "797", "765", "828", "802", "806", "825", "769", "769", "726", "781", "841", "813", "824", "822", "764", "761", "782", "752", "790", "790", "719", "757", "721", "713", "757", "704", "729", "726", "675", "706", "716", "697", "749", "731", "753", "802", "743", "788", "781", "729", "794", "816", "768", "764", "786", "710", "709", "722", "690", "728", "730", "705", "746", "748", "701", "741", "733", "691", "743", "726", "721", "749", "698", "720", "743", "684", "714", "726", "710", "789", "774", "719", "773", "758", "704", "744", "757", "720", "764", "802", "748", "761", "782", "756", "783", "799", "765", "745", "779", "730", "718", "763", "773", "725", "767", "780", "726", "751", "754", "705", "751", "780", "730", "731", "752", "740", "737", "759", "735", "718", "783", "787", "724", "772", "790", "741", "715", "761", "766", "741", "766", "730", "709", "752", "733", "723", "772", "744", "723", "750", "714", "711", "771", "734", "768", "817", "780", "756", "768", "711", "707", "765", "740", "763", "766", "737", "758", "771", "723", "756", "737", "783", "758", "736", "767", "721", "737", "772", "729", "780", "775", "724", "740", "728", "720", "790", "773", "750", "775", "718", "732", "755", "726", "770", "757", "708", "736", "697", "741", "783", "711", "743", "745", "699", "744", "693", "713", "740", "677", "729", "762", "725", "753", "801", "754", "780", "791", "736", "761", "761", "709", "702", "717", "687", "683", "702", "696", "645", "635", "615", "653", "667", "699", "646", "642", "704", "774", "784", "784", "767", "740", "675", "703", "770", "832", "828", "752", "798", "808", "741", "743", "799", "771", "795", "823", "792", "738", "745", "716", "718", "764", "761", "742", "753", "710", "700", "737", "726", "709", "751", "750", "712", "729", "704", "679", "719", "726", "684", "715", "727", "685", "718", "743", "747", "796", "802", "711", "740", "738", "708", "755", "756", "735", "795", "758"},
            {"958", "978", "1020", "1062", "1081", "1042", "984", "957", "985", "1046", "1064", "1057", "1017", "958", "932", "953", "1009", "1055", "1070", "1046", "993", "962", "961", "993", "1020", "1040", "1034", "982", "925", "914", "965", "1065", "1109", "1085", "1063", "1029", "955", "943", "960", "988", "1010", "1012", "984", "939", "917", "939", "991", "1020", "1030", "1016", "971", "947", "967", "1013", "1057", "1069", "1034", "977", "940", "941", "983", "1038", "1065", "1039", "989", "945", "934", "947", "985", "1008", "1000", "954", "918", "945", "1002", "1060", "1066", "1014", "964", "951", "982", "1024", "1038", "1020", "976", "936", "940", "985", "1035", "1045", "1011", "976", "975", "1004", "1044", "1046", "999", "962", "960", "988", "1021", "1007", "953", "910", "905", "935", "964", "962", "940", "915", "935", "964", "998", "989", "969", "904", "851", "850", "901", "978", "1008", "985", "944", "884", "851", "875", "990", "1093", "1082", "1023", "970", "964", "979", "1013", "1002", "982", "937", "884", "863", "901", "964", "1001", "1002", "975", "919", "884", "897", "954", "1015", "1024", "1002", "968", "918", "882", "875", "905", "958", "968", "936", "895", "913", "950", "994", "998", "956", "909", "904", "939", "982", "1001", "996", "964", "907", "861", "858", "930", "1000", "1017", "1015", "974", "916", "885", "891", "927", "963", "964", "937", "904", "913", "961", "1023", "1042", "1022", "976", "926", "899", "932", "977", "998", "994", "969", "916", "870", "861", "930", "1008", "1042", "1040", "1005", "947", "914", "918", "981", "1037", "1036", "1013", "973", "949", "971", "1022", "1051", "1045", "996", "964", "972", "998", "1030", "1026", "982", "927", "906", "917", "971", "994", "962", "913", "895", "938", "988", "1010", "1010", "988", "935", "894", "898", "942", "962", "988", "974", "930", "916", "936", "984", "1028", "1044", "1011", "958", "927", "945", "984", "1015", "1019", "977", "930", "913", "935", "979", "1013", "1026", "1002", "955", "932", "947", "985", "1004", "988", "937", "886", "869", "909", "950", "972", "956", "902", "863", "858", "906", "968", "991", "968", "941", "947", "969", "1003", "999", "978", "929", "873", "877", "958"},
            {"926", "914", "885", "874", "879", "894", "880", "897", "932", "944", "948", "921", "861", "848", "880", "895", "912", "986", "1000", "946", "950", "971", "966", "907", "843", "886", "907", "904", "879", "874", "914", "922", "962", "987", "958", "920", "933", "922", "943", "936", "893", "929", "930", "926", "973", "976", "954", "933", "950", "910", "897", "947", "939", "867", "897", "975", "1013", "927", "931", "907", "864", "873", "912", "933", "940", "883", "860", "870", "831", "813", "851", "841", "847", "865", "831", "806", "799", "782", "801", "841", "891", "826", "806", "840", "941", "960", "930", "903", "897", "908", "933", "954", "987", "967", "979", "971", "950", "919", "900", "880", "802", "792", "869", "953", "1047", "965", "968", "956", "918", "885", "912", "949", "940", "958", "1038", "1026", "960", "1003", "967", "927", "940", "924", "906", "913", "893", "843", "874", "955", "1105", "1039", "943", "851", "850", "872", "874", "891", "895", "877", "879", "872", "839", "801", "841", "962", "1019", "1005", "968", "951", "944", "908", "936", "940", "924", "942", "944", "938", "903", "879", "891", "924", "897", "926", "940", "862", "870", "885", "898", "892", "874", "855", "800", "825", "901", "975", "998", "965", "947", "936", "885", "882", "911", "894", "896", "923", "955", "926", "898", "926", "924", "911", "872", "866", "882", "917", "908", "886", "909", "919", "926", "870", "835", "877", "920", "942", "939", "923", "890", "909", "930", "917", "918", "923", "908", "910", "897", "808", "806", "771", "770", "744", "775", "849", "913", "956", "964", "953", "887", "861", "818", "784", "798", "828", "904", "1020", "1133", "1147", "967", "1011", "950", "825", "843", "901", "1009", "1031", "914", "955", "965", "942", "917", "885", "833", "840", "858", "946", "1001", "969", "998", "941", "944", "957", "923", "916", "880", "880", "871", "844", "862", "898", "937", "878", "894", "889", "873", "847", "841", "820", "797", "769", "777", "854", "910", "917", "948", "951", "925", "885", "809", "782", "782", "758", "868", "947", "962", "983", "965", "862", "867", "882", "886", "897"},
            {"866", "927", "924", "892", "897", "903", "859", "865", "883", "894", "868", "874", "916", "953", "945", "909", "925", "934", "843", "860", "892", "903", "876", "863", "884", "871", "895", "906", "869", "878", "889", "884", "848", "761", "791", "844", "875", "873", "832", "854", "868", "877", "850", "840", "783", "696", "735", "792", "744", "782", "786", "793", "774", "736", "745", "804", "880", "864", "873", "893", "873", "836", "853", "858", "842", "850", "883", "909", "897", "866", "880", "890", "859", "840", "854", "851", "819", "869", "897", "843", "784", "802", "799", "805", "742", "692", "713", "815", "905", "903", "861", "907", "891", "865", "903", "919", "820", "825", "851", "863", "843", "852", "874", "876", "811", "833", "858", "842", "848", "805", "748", "764", "822", "846", "865", "850", "794", "735", "787", "863", "924", "903", "887", "885", "822", "796", "835", "762", "861", "846", "799", "853", "910", "926", "913", "829", "809", "794", "774", "728", "717", "748", "832", "874", "820", "856", "823", "764", "776", "840", "919", "924", "908", "921", "944", "907", "815", "836", "883", "851", "853", "846", "839", "886", "863", "773", "722", "800", "905", "950", "977", "967", "911", "869", "805", "734", "715", "747", "770", "736", "707", "720", "725", "794", "888", "931", "917", "878", "857", "869", "877", "898", "840", "875", "898", "898", "801", "774", "845", "880", "823", "746", "704", "735", "800", "830", "821", "765", "836", "905", "913", "843", "733", "768", "839", "940", "868", "789", "700", "687", "732", "847", "855", "794", "787", "829", "847", "852", "833", "766", "705", "727", "765", "706", "751", "842", "874", "801", "779", "814", "845", "883", "913", "856", "803", "823", "872", "923", "945", "940", "916", "903", "838", "800", "797", "783", "768", "797", "840", "800", "731", "662", "736", "834", "802", "828", "802", "767", "763", "691", "733", "713", "688", "870", "1056", "1033", "1039", "936", "826", "820", "890", "928", "910", "861", "930", "995", "860", "857", "888", "863", "877", "894", "866", "878", "857", "842", "829", "806", "883", "882"},
            {"978", "1020", "1062", "1081", "1042", "984", "957", "985", "1046", "1064", "1057", "1017", "958", "932", "953", "1009", "1055", "1070", "1046", "993", "962", "961", "993", "1020", "1040", "1034", "982", "925", "914", "965", "1065", "1109", "1085", "1063", "1029", "955", "943", "960", "988", "1010", "1012", "984", "939", "917", "939", "991", "1020", "1030", "1016", "971", "947", "967", "1013", "1057", "1069", "1034", "977", "940", "941", "983", "1038", "1065", "1039", "989", "945", "934", "947", "985", "1008", "1000", "954", "918", "945", "1002", "1060", "1066", "1014", "964", "951", "982", "1024", "1038", "1020", "976", "936", "940", "985", "1035", "1045", "1011", "976", "975", "1004", "1044", "1046", "999", "962", "960", "988", "1021", "1007", "953", "910", "905", "935", "964", "962", "940", "915", "935", "964", "998", "989", "969", "904", "851", "850", "901", "978", "1008", "985", "944", "884", "851", "875", "990", "1093", "1082", "1023", "970", "964", "979", "1013", "1002", "982", "937", "884", "863", "901", "964", "1001", "1002", "975", "919", "884", "897", "954", "1015", "1024", "1002", "968", "918", "882", "875", "905", "958", "968", "936", "895", "913", "950", "994", "998", "956", "909", "904", "939", "982", "1001", "996", "964", "907", "861", "858", "930", "1000", "1017", "1015", "974", "916", "885", "891", "927", "963", "964", "937", "904", "913", "961", "1023", "1042", "1022", "976", "926", "899", "932", "977", "998", "994", "969", "916", "870", "861", "930", "1008", "1042", "1040", "1005", "947", "914", "918", "981", "1037", "1036", "1013", "973", "949", "971", "1022", "1051", "1045", "996", "964", "972", "998", "1030", "1026", "982", "927", "906", "917", "971", "994", "962", "913", "895", "938", "988", "1010", "1010", "988", "935", "894", "898", "942", "962", "988", "974", "930", "916", "936", "984", "1028", "1044", "1011", "958", "927", "945", "984", "1015", "1019", "977", "930", "913", "935", "979", "1013", "1026", "1002", "955", "932", "947", "985", "1004", "988", "937", "886", "869", "909", "950", "972", "956", "902", "863", "858", "906", "968", "991", "968", "941", "947", "969", "1003", "999", "978", "929", "873", "877", "958", "978"}};
    private static final String VARIANT_DATA_PATH = ".\\data\\";

    @Override
    public GeneratingResult generate(String condition) {
        //do Generate logic here
        String text = " ";
        String code = " ";
        String instructions = " ";

        // Генерируем слачайный вариант из числа файлов, находящихся в папке data
        int variantNumber = 0;

        File file = new File(VARIANT_DATA_PATH);
        try {
            variantNumber = file.list().length;
        } catch (NullPointerException e) {
            text = "Папка с файлами не найдена!";
        }

        try {
            if (variantNumber == 0) {
                text = "В папке data нет файлов! Невозможно сгенерировать вариант!";
            } else {
                text = "Ваш вариант загружен в установку";
                Random random = new Random();
                int currentVariant = random.nextInt(variantNumber);
                //System.out.println(currentVariant);
                List<String> variant_data = Files.readAllLines(Paths.get(VARIANT_DATA_PATH + file.list()[currentVariant]));
                //System.out.println(variant_data);
                code = variant_data.toString();
                instructions = getInstructionsFromCode(variant_data);
                System.out.println(instructions);
            }

        } catch (Exception e) {
            text = "Файлы вариантов не были найдены! Возникла ошибка:\n" + e.toString() + "\n" + new File(".").getAbsolutePath();
            ;
        }

        if (code.equals(" ")) {
            variantNumber = VARIANTS.length;

            if (variantNumber == 0) {
                text = "Вариантов не найдено!";
            } else {
                text = "Ваш вариант загружен!";
                Random random = new Random();
                int currentVariant = random.nextInt(variantNumber);
                //System.out.println(currentVariant);
                List<String> variant_data = new ArrayList<>(Arrays.asList(VARIANTS[currentVariant]));
                System.out.println(variant_data);
                code = variant_data.toString();
                instructions = getInstructionsFromCode(variant_data);
                System.out.println(instructions);
            }


        }


        return new GeneratingResult(text, code, instructions);
    }

    private static String getInstructionsFromCode(List<String> code) {
        AnswerModel answerModel = new AnswerModel(code);
        answerModel.countModel();

        ObjectMapper objectMapper = new ObjectMapper();
        try {
            return objectMapper.writeValueAsString(answerModel);
        } catch (Exception e) {
            e.printStackTrace();
            return "";
        }
    }
}

