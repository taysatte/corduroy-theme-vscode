#include <fstream>
#include <iostream>

using namespace std;

int main() {
  string line;
  ifstream file;

  file.open("myfile.txt");

  // Read file line by line.
  while (getline(file, line)) {
    cout << line << endl;
  }

  cout << "File read successfully" << endl;
  file.close();
  return 0;
}