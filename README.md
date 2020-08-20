## App authrn

#### React Native e Typescript.

Com certeza o desenvolvimento com typescript a primeira vista foi de cair a produtividade a quase zero! Mas tendo em vista os benefícios da 
tipajem estática faria um projeto mais acertado, fiz uso do typescript que até então estava no no papel. Só o estudava mas nunca usava em projetos reais.
Está é a minha primeira aplicação com React Native e Typescript.

#### React Native "react-native": "0.63.2" 


#### Typescript "typescript": "^3.8.3"

TypeScript traz a robustez de uma tipagem estática para aplicações JavaScript, o que torna o projeto muito mais escalável, conciso e com a 
possibilidade de identificar bugs ainda em 
tempo de compilação.
Além de ajudar no ambiente de desenvolvimento, o TypeScript ainda permite que utilizemos de funcionalidades da linguagem que ainda não estão 
disponíveis de forma nativa, por exemplo, no Node.js podemos utilizar os ES Modules (import/export) normalmente.

Podemos transpilar nosso código para que o mesmo seja lido por todas versões de browsers, assim como fazemos com 
o Babel em aplicações totalmente JavaScript.

#### JWT feito com a APPI JavaScript axios "^0.19.2"

#### ECMAScript 6
Esta aplicação foi criada usando os recursos mais novos de React Native, sito como exemplo os Hucks que são funções que permitem usar o estado e 
os métodos do ciclo de vida de um componente 
de classe em um componente funcional.disponíveis desde a versão 16.7.0-alpha e foram liberados também no React Native no release da versão 0.59.

## Problemas na execução do projeto:

Com as mudanças oriundas da nova versão do React Native, o conteudo disponível com exemplos práticos de uso dos recursos ficou defasada.
Não se encontra com facilidade conteúdo que envolve o uso de Hoocks. Fugindo do uso de "state = { this.state }" para "const [state, setState]=useState();" 
a mudança foi gande. Criando contexto para englobar todo o componente foi um recurso estratégico interessante de se usar. Contudo, complicou na hora 
de saber levar o fluxo para o componente certo. Tive problemas com o componente que criei para os posts. 
Havia muitos avisos do Typescript sobre inconsistencia entre typos, de enlouquecer qualquer um. Mas tudo foi normalizado a partir do ponto que percebi 
tudo o que o typescript queria. 
Em alguns casos tive que voltar a usar o tipo any que nos traz devolta ao javascript sem tipagem, pois parecei ser a unica forma de passar o código a 
diante. 

#### Requests

Parece haver uma diferença entre o a configuração do **axios** e o request esperado pelo servidor da segware. Pois a requisição **Post** funcionava corretamente
com o padrão que adotei no inicio, contudo o mesmo modelo não se aplica a requisição tipo **Get**. Tive que alterar o modelo da requisição para funcionar. 
Digamos que tive que fazer uma abordagem mais direta para funcionar. As requisições tipo **Post** passam pelo contexto geral antes de retornarem o conteúdo 
mas o Get que fez o fetch dos dados teve que ser passado diretamente para a classe chamadora sem passar pelo contexto.


#### Etapas não realizadas 

 - Incluir testes unitários e de integração;

A etapa de testes e integração, não foi realizada pois em virtude de muitos contatempos não foi possível entrar no merito dessas questões.
Contudo fica o conhecimento adquirido som a criação do App.


## Respostas ao Questionário

    1. Qual sua experiência com a linguagem JavaScript? Por favor, nomeie o principal projeto o qual você utilizou
    esta linguagem,os principais frameworks envolvidos e a arquitetura utilizada.
   
    Projeto em site em PHP de https://celulas.fabianospdev.com.br  uso de javascript, ajax ,jquery, bootstrap, html5.
    
    2. Você possui experiência em alguma outra linguagem para back-end?
    PHP, Delphi7,Delphi-XE8, java, javaEE.
    
    3. Qual a sua experiência com tecnologias front-end como AngularJS e ReactJS?
       Tenho contato com Angular com Ionic para dispositivos moveis.
       
    4. Qual sua experiência em virtualização de ambientes, exemplo: Docker?
    Uso virtualização no meu ambiente particular, com OS virtualizado com VirtualBox, onde
    uso sistemas varios OS para testar meus projetos. Não utiliso a virtualização por container
    como o Docker faz. Contudo acredito que vou começar a usar agora.
   
    5. Quais foram seus cargos nos times que você contribuiu (considerando os seus últimos 
    projetos/trabalhos que você trabalhou)? Qual era o tamanho destes times?
   
    Sempre trabalhei como freelancer. Tenho meus parceiros que possso cita-los.  VS systens que é uma 
    empresa de são josé que faz hardware e software para aplicações em automação. Cria também soluções
    para a área de segurança. Tenho dois aplicativos nessa área de segurança postados no Google Play. 
    O https://play.google.com/store/apps/details?id=br.com.help24hs que é um App botão de pânico para
    o celular Android com GPS integrado, conextado a empresa de segurança, que abre uma ocorrencia na
    tela do operador, tem também https://play.google.com/store/apps/details?id=br.com.chegadaassistida
    que é um App para auxilho do cliente com acesso as cameras do mesmo; também vinclado ao operador da
    empresa de segurança. 


###### Tenho conhecimentos em :
    • Experiência em construção de programas com DELPHI 7.
    • Experiência com Firebird  2.1.
    • Experiência com PostgreSQL.
    • Java SE/EE/WEB.
    • HTML /PHP/ CSS/JavaScritp.
    • AngularJS
    • BootStrap.
    • Desenvolvimento Android, com Android Studio
    • Ionic
    • TypeScript
    • TypeScript junto com React e Vue.
    • IOS com swift no xcode
    • Recursos do ES6, ES7, ES8 como Destructuring, Arrow Functions, Promise, Módulos.
    • IOS - swift com xcode
    • Phalcon - PHP
    
 
 

