package vlab.server_java.model;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.*;

public class AnswerModel {

    private static final int HISTOGRAM_INTERVAL = 50;

    // Исходные даныные - список строк
    private List<String> code;
    // Среднее значение
    private double M;
    // Среднеквадратичное отклонение
    private double SDNN;
    // Коэффициент вариации
    private double CV;
    // Среднеквадратическая разностная характеристика
    private double RMSSD;

    // Список значение для гистограммы - интервалы (ось Х) и частота появления значений в этих интервалах (ось У)
    private List<Integer> histIntervals;
    private List<Double> histValues;

    // Амплитуда моды
    private double AMo;
    // Мода - самое часто встречающееся значение
    private double Mo;

    // Вариационный размах
    private double MxDmn;
    // Индекс напряжения
    private double SI;
    // Строковый вывод по индексу напряжения - в норме, выше нормы, значительно выше нормы
    private String SIDescription;

    public AnswerModel(List<String> code) {
        this.code = code;
    }

    public AnswerModel(double m, double SDNN, double CV, double RMSSD, List<Integer> histIntervals, List<Double> histValues, int AMo, int mo, int mxDmn, double SI, String SIDescription) {
        this.code = null;
        this.M = m;
        this.SDNN = SDNN;
        this.CV = CV;
        this.RMSSD = RMSSD;
        this.histIntervals = histIntervals;
        this.histValues = histValues;
        this.AMo = AMo;
        this.Mo = mo;
        this.MxDmn = mxDmn;
        this.SI = SI;
        this.SIDescription = SIDescription;
    }

    public AnswerModel(double m, double SDNN, double CV, double RMSSD, double AMo, double mo, double mxDmn, double SI) {
        M = m;
        this.SDNN = SDNN;
        this.CV = CV;
        this.RMSSD = RMSSD;
        this.AMo = AMo;
        Mo = mo;
        MxDmn = mxDmn;
        this.SI = SI;
    }

    public AnswerModel() {
    }

    public double getM() {
        return M;
    }

    private void setM(double m) {
        this.M = m;
    }

    public double getSDNN() {
        return SDNN;
    }

    private void setSDNN(double SDNN) {
        this.SDNN = SDNN;
    }

    public double getCV() {
        return CV;
    }

    private void setCV(double CV) {
        this.CV = CV;
    }

    public double getRMSSD() {
        return RMSSD;
    }

    private void setRMSSD(double RMSSD) {
        this.RMSSD = RMSSD;
    }

    public List<Integer> getHistIntervals() {
        return histIntervals;
    }

    public void setHistIntervals(List<Integer> histIntervals) {
        this.histIntervals = histIntervals;
    }

    public List<Double> getHistValues() {
        return histValues;
    }

    public void setHistValues(List<Double> histValues) {
        this.histValues = histValues;
    }

    public double getAMo() {
        return AMo;
    }

    private void setAMo(double AMo) {
        this.AMo = AMo;
    }

    public double getMo() {
        return Mo;
    }

    private void setMo(double mo) {
        this.Mo = mo;
    }

    public double getMxDmn() {
        return MxDmn;
    }

    private void setMxDmn(double mxDmn) {
        this.MxDmn = mxDmn;
    }

    public double getSI() {
        return SI;
    }

    private void setSI(double SI) {
        this.SI = SI;
    }

    public String getSIDescription() {
        return SIDescription;
    }

    public void setSIDescription(String SIDescription) {
        this.SIDescription = SIDescription;
    }

    @Override
    public String toString() {
        return "AnswerModel{" +
                "code=" + code +
                ", M=" + M +
                ", SDNN=" + SDNN +
                ", CV=" + CV +
                ", RMSSD=" + RMSSD +
                ", histIntervals=" + histIntervals +
                ", histValues=" + histValues +
                ", AMo=" + AMo +
                ", Mo=" + Mo +
                ", MxDmn=" + MxDmn +
                ", SI=" + SI +
                ", SIDescription='" + SIDescription + '\'' +
                '}';
    }

    public void countModel() {
        List<Integer> intCode = new ArrayList<>();
        for (String str : code) {
            intCode.add(Integer.parseInt(str));
        }
        setM(countM(intCode));
        setSDNN(countSDNN(intCode, M));
        setCV(round(SDNN / M) * 100);
        setRMSSD(countRMSSD(intCode));
        setHistIntervals(countHistIntervals(intCode));
        setHistValues(countHistValues(intCode, histIntervals));
        setAMo(Collections.max(histValues)*100);
        //System.out.println(AMo);
        //System.out.println(histValues);
        setMo(histIntervals.get(histValues.indexOf(round(AMo/100))) + (HISTOGRAM_INTERVAL / 2));
        //setAMo(countAMo(intCode));
        //setMo(countMo(intCode));
        setMxDmn(countMxDmn(intCode));
        setSI(countSI(AMo, Mo, MxDmn));
        setSIDescription(countSIDescription(SI));
    }

    private double countM(List<Integer> intCode) {
        int n = intCode.size();
        double m = 0;
        for (Integer i : intCode) {
            m += i;
        }
        return round(m / n);
    }

    private double countSDNN(List<Integer> intCode, double m) {
        int n = intCode.size();
        double sdnn = 0;
        for (Integer i : intCode) {
            sdnn += Math.pow((i - m), 2);
        }
        return round(Math.sqrt(sdnn / (n - 1)));
    }

    private double countRMSSD(List<Integer> intCode) {
        int n = intCode.size();
        double rmssd = 0;
        for (int i = 0; i < n - 1; i++) {
            rmssd += Math.pow((intCode.get(i) - intCode.get(i + 1)), 2);
        }
        return round(Math.sqrt(rmssd / (n - 1)));
    }

    private List<Integer> countHistIntervals(List<Integer> intCode) {
        int minValue = Collections.min(intCode);
        int maxValue = Collections.max(intCode);
        int minInterval = (minValue / 100) * 100;
        int maxInterval = ((maxValue / 100) + 1) * 100;

        List<Integer> result = new ArrayList<>();
        while (minInterval <= maxInterval) {
            result.add(minInterval);
            minInterval += HISTOGRAM_INTERVAL;
        }
        return result;
    }

    private List<Double> countHistValues(List<Integer> intCode, List<Integer> intervals) {
        Double[] arr = new Double[intervals.size() - 1];
        Arrays.fill(arr, 0.0);
        List<Double> result = Arrays.asList(arr);
        for (Integer i : intCode) {
            int k = 0;
            while (i > intervals.get(k)) {
                //System.out.println(i.toString()+ "   " + intervals.get(k).toString());
                k++;
            }
            result.set(k - 1, result.get(k - 1) + 1);
        }
        for (int i = 0; i < result.size(); i++) {
            result.set(i, round(result.get(i) / intCode.size()));
        }
        return result;
    }

    private double countAMo(List<Integer> intCode) {
        return round(((double) Collections.max(countFrequencies(intCode).keySet()) / intCode.size()));
    }

    private double countMo(List<Integer> intCode) {
        Map<Integer, Integer> map = countFrequencies(intCode);
        int max_key = Collections.max(map.keySet());
        return round(((double) map.get(max_key)));
    }

    private Map<Integer, Integer> countFrequencies(List<Integer> intCode) {
        Map<Integer, Integer> frequencies = new HashMap<>();
        Set<Integer> elemSet = new HashSet<>(intCode);
        for (Integer i : elemSet) {
            frequencies.put(Collections.frequency(intCode, i), i);
        }
        return frequencies;
    }

    private int countMxDmn(List<Integer> intCode) {
        int minValue = Collections.min(intCode);
        int maxValue = Collections.max(intCode);
        return maxValue - minValue;
    }

    private double countSI(double AMo, double Mo, double MxDmn) {
        //100 - за проценты, 100 - за миллисекунды, 100 - хз откуда
        return round((AMo / (2 * Mo * MxDmn)) * 100 * 100 * 100);
    }

    private String countSIDescription(double SI) {

        if (SI <= 150) {
            return "normal";
        } else if ((SI > 150) && (SI <= 300)) {
            return "small increase";
        } else if (SI >= 300) {
            return "big increase";
        }
        return "Out of range";
    }

    //Просто методично сверяет все значения, которые ввел пользователь, с эталонными (+- 2%) и подсчитывает результат пользователя и комментарий
    public Map<BigDecimal, String> countPoints(AnswerModel correctAnswer, AnswerModel userAnswer) {
        Map<BigDecimal, String> result = new HashMap<>();
        double resultPoints = 0.0;
        StringBuilder comment = new StringBuilder();

        if (checkWithAccuracy(correctAnswer.getM(), userAnswer.getM())) {
            resultPoints += 0.1;
        } else {
            comment.append("Неправильно посчитан параметр M;\n");
        }

        if (checkWithAccuracy(correctAnswer.getSDNN(), userAnswer.getSDNN())) {
            resultPoints += 0.1;
        } else {
            comment.append("Неправильно посчитан параметр SDNN;\n");
        }

        if (checkWithAccuracy(correctAnswer.getCV(), userAnswer.getCV())) {
            resultPoints += 0.1;
        } else {
            comment.append("Неправильно посчитан параметр CV;\n");
        }

        if (checkWithAccuracy(correctAnswer.getRMSSD(), userAnswer.getRMSSD())) {
            resultPoints += 0.1;
        } else {
            comment.append("Неправильно посчитан параметр RMSSD;\n");
        }

        if (correctAnswer.getHistIntervals().equals(userAnswer.getHistIntervals())) {
            resultPoints += 0.05;
            //Проверяем с точностью значения частот для гистограммы
            boolean flag = true;
            for(int i = 0; i<userAnswer.getHistValues().size(); i++){
                if(!checkWithAccuracy(correctAnswer.getHistValues().get(i), userAnswer.getHistValues().get(i))){
                    flag = false;
                }
            }

            if (flag) {
                resultPoints += 0.25;
            } else {
                comment.append("Неправильно посчитаны значения частот для гистограммы;\n");
            }
        } else {
            comment.append("Неправильно посчитаны значения кардиоинтервалов для гистограммы;\n");
        }

        if (checkWithAccuracy(correctAnswer.getAMo(), userAnswer.getAMo())) {
            resultPoints += 0.05;
        } else {
            comment.append("Неправильно посчитан параметр AMo;\n");
        }

        if (checkWithAccuracy(correctAnswer.getMo(), userAnswer.getMo())) {
            resultPoints += 0.05;
        } else {
            comment.append("Неправильно посчитан параметр Mo;\n");
        }

        if (checkWithAccuracy(correctAnswer.getMxDmn(), userAnswer.getMxDmn())) {
            resultPoints += 0.05;
        } else {
            comment.append("Неправильно посчитан параметр MxDMn;\n");
        }

        if (checkWithAccuracy(correctAnswer.getSI(), userAnswer.getSI())) {
            resultPoints += 0.1;
            if (correctAnswer.getSIDescription().equals(userAnswer.getSIDescription())) {
                resultPoints += 0.05;
            } else {
                comment.append("Неправильно сделан вывод о значении индекса напряжения;\n");
            }
        } else {
            comment.append("Неправильно посчитан индекс напряжения;\n");
        }

        if (resultPoints == 1.0) {
            comment.append("Отличная работа! Все значения посчитаны верно!");
        }

        result.put(BigDecimal.valueOf(resultPoints), comment.toString());
        return result;
    }

    private boolean checkWithAccuracy(double correctValue, double userValue) {
        double accuracy = 0.02;
        double allowedDifference = correctValue * accuracy;
        return (userValue >= correctValue - allowedDifference) && (userValue <= correctValue + allowedDifference);
    }

    private double round(double value) {
        BigDecimal bd = new BigDecimal(Double.toString(value));
        bd = bd.setScale(3, RoundingMode.HALF_UP);
        return bd.doubleValue();
    }
}
