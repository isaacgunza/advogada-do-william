# Para a Advogada do William 💖

Um pequeno site romântico, responsivo, em português, feito apenas com HTML, CSS e JavaScript. Não precisa de instalar nada nem de pagar alojamento.

## Ficheiros
- `index.html` — conteúdo da carta e estrutura do site.
- `style.css` — cores, animações e adaptação a telemóveis/computadores.
- `script.js` — corações animados, respostas dos botões e botão da música.

## Publicar grátis no GitHub Pages
1. Entre em https://github.com e crie uma conta, se ainda não tiver.
2. Crie um repositório novo, por exemplo `advogada-do-william`. Pode deixá-lo **Public**.
3. Carregue em **Add file → Upload files** e envie `index.html`, `style.css` e `script.js` (pode também enviar este README).
4. Carregue em **Commit changes**.
5. Abra **Settings → Pages**.
6. Em **Build and deployment**, escolha **Deploy from a branch**; selecione `main` e `/ (root)` e carregue em **Save**.
7. Aguarde alguns minutos. O GitHub mostrará o endereço do site na secção Pages, normalmente `https://SEU-USUARIO.github.io/advogada-do-william/`.

## Publicar grátis no Netlify
1. Entre em https://app.netlify.com e crie uma conta.
2. No painel, escolha a opção para adicionar um site e fazer deploy manual (*Netlify Drop*).
3. Arraste a pasta que contém `index.html`, `style.css` e `script.js` para a área de publicação, ou arraste o ZIP extraído.
4. O Netlify publicará o site e dará um endereço terminado em `netlify.app`.

## Personalizar a música
O site incorpora um vídeo do YouTube como exemplo. Para trocar a música:
1. Abra `script.js`.
2. Encontre `2Vv-BfVoq4g` e substitua pelo ID do vídeo escolhido.
3. O ID é a parte depois de `v=` num endereço como `https://www.youtube.com/watch?v=ID_DO_VIDEO`.
4. Confirme que o vídeo permite incorporação. Alguns vídeos, vídeos privados ou com restrições não funcionam em leitores incorporados.

A reprodução só é tentada depois de a pessoa carregar em **Iniciar música**, porque os navegadores podem bloquear autoplay com som. O YouTube pode apresentar controlos ou anúncios próprios.

## Alterar o texto
Abra `index.html` e edite os parágrafos da carta, o nome ou a pergunta. Não altere os nomes dos ficheiros sem atualizar os caminhos no HTML.

## Testar no computador
Basta abrir `index.html` no navegador. Para confirmar o comportamento real do YouTube, é melhor testar depois de publicar o site.

## Privacidade
O site não tem formulário nem recolhe respostas. Se a pessoa clicar em “Sim”, a mensagem aparece apenas no dispositivo dela; não é enviada para William.
