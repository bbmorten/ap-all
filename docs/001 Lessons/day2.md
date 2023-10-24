# Day 2 - 20231023

```shell
import java.util.Scanner;

public class IPv4ToBinaryConverter {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter IPv4 address: ");
        String ipv4Address = scanner.nextLine();

        String binaryRepresentation = convertIPv4ToBinary(ipv4Address);
        System.out.println("Binary representation: " + binaryRepresentation);
    }

    private static String convertIPv4ToBinary(String ipv4Address) {
        StringBuilder binaryRepresentation = new StringBuilder();
        
        String[] octets = ipv4Address.split("\\.");
        for (String octet : octets) {
            int octetInt = Integer.parseInt(octet);
            String binaryOctet = String.format("%08d", Integer.parseInt(Integer.toBinaryString(octetInt)));
            binaryRepresentation.append(binaryOctet).append(".");
        }

        // Remove the last dot
        binaryRepresentation.setLength(binaryRepresentation.length() - 1);

        return binaryRepresentation.toString();
    }
}

```
