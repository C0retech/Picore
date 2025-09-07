#include <fstream>
#include <iostream>

int main() {
    std::ofstream file("index.html");

    if (!file) {
        std::cerr << "Kunde inte skapa filen!" << std::endl;
        return 1;
    }

    file << "<!DOCTYPE html>\n";
    file << "<html lang=\"sv\">\n";
    file << "<head>\n";
    file << "    <meta charset=\"UTF-8\">\n";
    file << "    <title>Picore.se Parkerad</title>\n";
    file << "    <style>\n";
    file << "        body { font-family: Arial, sans-serif; text-align: center; padding-top: 100px; background-color: #f4f4f4; color: #333; }\n";
    file << "        h1 { font-size: 48px; }\n";
    file << "        p { font-size: 20px; }\n";
    file << "    </style>\n";
    file << "</head>\n";
    file << "<body>\n";
    file << "    <h1>Denna domän är parkerad</h1>\n";
    file << "    <p>Vi kommer tillbaka snart! ☕</p>\n";
    file << "</body>\n";
    file << "</html>\n";

    file.close();
    std::cout << "index.html skapad!" << std::endl;

    return 0;
}
