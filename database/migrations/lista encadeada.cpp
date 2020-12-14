#include "produtos.hpp"
using namespace std;
int main()
{
    Produtos **P, obj, *Resp;
    std::string nome;
    int quant, cod, op;
    bool a;
    P=new Produtos*[2];
    P[0]=NULL;
    P[1]=NULL;
    do{
        system("clear");
        cout<<"1 - Inserir\n";
        cout<<"2 - Excluir\n";
        cout<<"3 - Listagem Geral\n";
        cout<<"4 - Listagem decrescente por quantidade\n";
        cout<<"5 - Pesquisar produto\n";
        cout<<"6 - Sair\n";
        cin>>op;
        switch(op){
            case 1:
                cout<<"Digite o nome do produto: ";
                cin.ignore();
                getline(cin, nome);
                cout<<"Digte o código: ";
                cin>>cod;
                cout<<"Digite a quatidade: ";
                cin>>quant;
                P=obj.Inserir(P, nome, cod, quant);
                cout<<"Inserido!";
                break;
            case 2:
                if(P[0]==NULL){
                    cout<<"Sem registros para excluir.\n";
                }else{
                    cout<<"Digite o código do produto: ";
                    cin>>cod;
                    P=obj.Excluir(P, cod, &a);
                    if(a){
                        cout<<"Registro deletado.\n";
                    }else{
                        cout<<"Registro não encontrado.\n";
                    }
                }
                break;
            case 3:
                if(P[0]==NULL){
                    cout<<"Sem dados para listar.\n";
                }else{
                    cout<<"Listagem geral: \n";
                    obj.ListagemGeral(P[0]);
                }
                break;
            case 4:
                if(P[0]==NULL){
                    cout<<"Sem dados para listar.\n";
                }else{
                    cout<<"Listagem geral: \n";
                    obj.ListagemQuant(P[0]);
                }
                break;
            case 5:
                if(P[0]==NULL){
                    cout<<"Sem registros para pesquisar.\n";
                }else{
                    cout<<"digite o nome do produto: ";
                    cin.ignore();
                    getline(cin,nome);
                    Resp=obj.Pesquisar(P[0], nome);
                    if(Resp!=NULL){
                        cout<<"Produto encontrado: \n";
                        cout<<Resp->getCodigo()<<" - "<<Resp->getNome()<<" - "<<Resp->getQuantidade()<<"\n";
                    }
                }
                break;
            case 6:
                cout<<"Encerrando...\n";
                break;
            default:
                cout<<"Opção inválida\n";
                
            }
            cin.ignore().get();
            
        }while(op!=6);
        

    return 0;
}
