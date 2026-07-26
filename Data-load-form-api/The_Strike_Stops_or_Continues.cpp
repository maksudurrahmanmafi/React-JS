#include <bits/stdc++.h>
using namespace std;
#define ll long long int

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int t;
    cin>>t;
    int universityExpence = 0,governmentFund = 0;
    while(t--){
     char c;
     int a;
     cin>>c>>a;

     (c =='G')?universityExpence+=a:governmentFund+=a;


    }

    cout<< ((governmentFund>=universityExpence)?"A greve vai parar.\n":"NAO VAI TER CORTE, VAI TER LUTA!\n");
    return 0;
}
