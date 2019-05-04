import java.util.Scanner;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.io.FileWriter;
import java.io.IOException;

public class ChordEntryTool {
    public ArrayList<String> chordStrings = new ArrayList<>();
    public Scanner scan;

    public ChordEntryTool() {

    }

    public static void main(String[] args) throws IOException {
        boolean flag = true;
        ChordEntryTool chordTool = new ChordEntryTool();

        while (flag) {
            chordTool.chordStrings.add(chordTool.getChord());
            System.out.println("Done? ");
            if ((chordTool.scan.next()).equals("y")) {
                flag = false;
            }

        }

        PrintWriter writer = new PrintWriter(new FileWriter("chords.txt"));

        for (String c: chordTool.chordStrings) {
            writer.println(c);
        }

        writer.close();
    }

    public String getChord() {
        String chordName;
        int fingersUsed = 0;
        int startFret = 0;
        int stringOneFret = 0;
        int stringOneFinger = 0;
        int stringTwoFret = 0;
        int stringTwoFinger = 0;
        int stringThreeFret = 0;
        int stringThreeFinger = 0;
        int stringFourFret = 0;
        int stringFourFinger = 0;

        System.out.println("Name:");
		chordName = scan.next();
		System.out.println("Starting fret: ");
		startFret = scan.nextInt();
		System.out.println("Fingers used: ");
		fingersUsed = scan.nextInt();
		System.out.println("String 1 Fret: (0 if not used)");
		string1Fret = scan.nextInt();
		if(string1Fret != 0) {
			System.out.println("String 1 Finger: ");
			string1Finger = scan.nextInt();
		}
		
		System.out.println("String 2 Fret: (0 if not used)");
		string2Fret = scan.nextInt();
		if(string2Fret != 0) {
			System.out.println("String 2 Finger: ");
			string2Finger = scan.nextInt();
		}
		System.out.println("String 3 Fret: (0 if not used)");
		string3Fret = scan.nextInt();
		if(string3Fret != 0) {
			System.out.println("String 3 Finger: ");
			string3Finger = scan.nextInt();
		}
		System.out.println("String 4 Fret: (0 if not used)");
		string4Fret = scan.nextInt();
		if(string4Fret != 0) {
			System.out.println("String 4 Finger:");
			string4Finger = scan.nextInt();
		}
		
		String concat = "chords[\'" + chordName + "\'] = [" + startFret + ", " + fingersUsed + ", [" + string1Fret + ", " + string1Finger + "], [" + string2Fret + ", " + string2Finger + "], [" + string3Fret + ", " + string3Finger + "], [" + string4Fret + ", " + string4Finger + "]];";
		return concat;


    }
}