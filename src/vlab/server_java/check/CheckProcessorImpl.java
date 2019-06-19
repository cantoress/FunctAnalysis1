package vlab.server_java.check;

import com.fasterxml.jackson.databind.ObjectMapper;
import rlcp.check.ConditionForChecking;
import rlcp.generate.GeneratingResult;
import rlcp.server.processor.check.CheckProcessor;
import rlcp.server.processor.check.PreCheckProcessor;
import rlcp.server.processor.check.PreCheckProcessor.PreCheckResult;
import rlcp.server.processor.check.PreCheckResultAwareCheckProcessor;
import vlab.server_java.model.AnswerModel;

import org.json.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Simple CheckProcessor implementation. Supposed to be changed as needed to provide
 * necessary Check method support.
 */
public class CheckProcessorImpl implements PreCheckResultAwareCheckProcessor<String> {
    @Override
    public CheckingSingleConditionResult checkSingleCondition(ConditionForChecking condition, String instructions, GeneratingResult generatingResult) throws Exception {
        //do check logic here
        BigDecimal points = BigDecimal.valueOf(0.0);
        String comment = "";
        double resultPoints = 0.0;

        try {
            ObjectMapper objectMapper = new ObjectMapper();

            String variantCode = generatingResult.getCode();

            AnswerModel correctAnswer = objectMapper.readValue(prepareInputJsonString(generatingResult.getInstructions()), AnswerModel.class);
            AnswerModel userAnswer = getUserAnswerFromJson(prepareInputJsonString(instructions));

            // Сверяем ответы и получаем map с одной парой данных - количество баллов и комментарий
            Map<BigDecimal, String> result= correctAnswer.countPoints(correctAnswer, userAnswer);
            for(Map.Entry<BigDecimal, String> item : result.entrySet()){
                points = item.getKey();
                comment = item.getValue();
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return new CheckingSingleConditionResult(points, comment);
    }


    private static String prepareInputJsonString(String input) {
        if (input == null) input = "";
        else input = input.trim();
        return input;
    }

    private AnswerModel getUserAnswerFromJson(String json) {
        JSONObject obj = new JSONObject(json);
        AnswerModel userAnswer = new AnswerModel(obj.getDouble("m"), obj.getDouble("sdnn"), obj.getDouble("cv"), obj.getDouble("rmssd"), obj.getDouble("amo"), obj.getDouble("mo"), obj.getDouble("mxdmn"), obj.getDouble("si"));
        String[] histInt = obj.getString("histIntervals").split(",");
        String[] histVal = obj.getString("histValues").split(",");
        List<Integer> histIntervals = new ArrayList<>();
        List<Double> histValues = new ArrayList<>();
        for (String str : histInt) {
            histIntervals.add(Integer.parseInt(str));
        }
        for (String str : histVal) {
            histValues.add(Double.parseDouble(str));
        }
        userAnswer.setHistIntervals(histIntervals);
        userAnswer.setHistValues(histValues);
        userAnswer.setSIDescription(obj.getString("sidescription"));

        return userAnswer;
    }

    // condition - тестовый набор
    // instructions - текущий ответ пользователя
    // generating result - вариант задания
    @Override
    public void setPreCheckResult(PreCheckResult<String> preCheckResult) {
    }
}
