// Online C++ compiler to run C++ program online
#include <bits/stdc++.h>
using namespace std;
#define ll long long int
// bool sortrev(const pair<int, int> &a, const pair<int, int> &b)
// {
//     if (a.first == b.first)
//     {
//         return true;
//     }
//     return (a.first > b.first);
// }
int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        ll n, k;
        cin >> n >> k;
        vector<pair<ll, ll>> dummy;
        for (int i = 0; i < n; i++)
        {
            ll x;
            cin >> x;
            dummy.push_back({x % k, i});
        }
        sort(dummy.begin(), dummy.end());
        for (int i = 0; i < n; i++)
        {
            cout << dummy[i].second + 1 << " ";
        }
        cout << endl;
    }
    return 0;
}