#include <iostream>
#include <fstream>
using namespace std;

int main() {
    string line;
    ifstream file;

    file.open("myfile.txt");

    // Read file line by line.
    while(getline(file, line)) {
        printf("%s", line.c_str());
    }
}