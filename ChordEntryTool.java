import java.util.Scanner;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.io.FileWriter;
import java.io.IOException;

public class ChordEntryTool {
    private ArrayList<String> chords = new ArrayList<>();
    private static Scanner scanner;
    private static PrintWriter printWriter;

    public ChordEntryTool(String fileName) throws IOException {
        scanner = new Scanner(System.in);
        printWriter = new PrintWriter(new FileWriter(fileName, true));
    }

    public static void main(String[] args) throws IOException {
        ChordEntryTool chordEntryTool = new ChordEntryTool("chords.txt");
        
        boolean flag = true;

        while (flag) {
            printWriter.println(chordEntryTool.createArrayFromInput());
            System.out.println("Done? ");
            flag = (scanner.next().equals("y")) ? false : true;
        }

        scanner.close();
        printWriter.close();
    }

    private String createArrayFromInput() {
        String chordName = "";
        int fingersUsed = 0;
        int fingerOneString = 0;
        int fingerOneFret = 0; 
        int fingerTwoString = 0;
        int fingerTwoFret = 0;
        int fingerThreeString = 0;
        int fingerThreeFret = 0;
        int fingerFourString = 0;
        int fingerFourFret = 0;

        System.out.println("Chord Name? ");
        chordName = scanner.next();
        
        System.out.println("Fingers Used? ");
        fingersUsed = scanner.nextInt();

        System.out.println("Finger 1 String? ");
        fingerOneString = scanner.nextInt();

        System.out.println("Finger 1 Fret? ");
        fingerOneFret = scanner.nextInt();

        System.out.println("Finger 2 String? ");
        fingerTwoString = scanner.nextInt();

        System.out.println("Finger 2 Fret? ");
        fingerTwoFret = scanner.nextInt();

        System.out.println("Finger 3 String? ");
        fingerThreeString = scanner.nextInt();

        System.out.println("Finger 3 Fret? ");
        fingerThreeFret = scanner.nextInt();

        System.out.println("Finger 4 String? ");
        fingerFourString = scanner.nextInt();

        System.out.println("Finger 4 Fret? ");
        fingerFourFret = scanner.nextInt();

        String concatenated = "chords['" + chordName + "'] = [" + fingersUsed + ", [" + fingerOneString + ", " + fingerOneFret + "], [" + fingerTwoString + ", " + fingerTwoFret + "], [" + fingerThreeString + ", " + fingerThreeFret + "], [" + fingerFourString + ", " + fingerFourFret + "]];";
        return concatenated;
    }
}