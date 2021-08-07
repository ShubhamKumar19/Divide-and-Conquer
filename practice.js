//always works in a sorted array, returns index of the searched array.TC-O(logn)
function BinarySearch(arr,search)
{
    if(search>arr[arr.length-1])
       return -1;
    var i=0,mid=0,j=arr.length;
    while(i<=j)
    {
        mid=Math.floor((i+j)/2);
        if(arr[mid]==search)
            return mid+1;
        if(search>arr[mid])
            i=mid+1;
        else
            j=mid-1;
    }
    return -1;
}
console.log(BinarySearch([1,2,3,4,5,6,7,8,9],8));