#include<iostream>
using namespace std;
struct node{
  int num;
  struct node *left;
  struct node *right;
}*root=NULL;

node* insert(struct node *p,int num){
  if(p==NULL){
    p=(struct node*)malloc(sizeof(struct node));
    p->left=NULL;
    p->right=NULL;
    p->num=num;
  }else if(num>p->num){ 
     p->right=insert(p->right,num);
     cout<<"NUMBER ADDED on right"<<endl;
  }else{  
     p->left=insert(p->left,num);
     cout<<"NUMBER ADDED on left"<<endl;
  }
}
void inorder(node *p){
  if(p!=NULL){
    cout<<"Hello"<<endl;
    inorder(p->left);
    cout<<p->num<<endl;
    inorder(p->right);
  }
  else
  cout<<"List is empty"<<endl;
}



int main(){
insert(root,7);
insert(root,6);
insert(root,9);
inorder(root);



}