# Deploy no Heroku

## Pré-requisitos
- Conta no Heroku
- Heroku CLI instalado
- Git configurado

## Passos para Deploy

### 1. Login no Heroku
```bash
heroku login
```

### 2. Criar app no Heroku
```bash
heroku create nome-do-seu-app
```

### 3. Adicionar buildpack do Node.js
```bash
heroku buildpacks:set heroku/nodejs
```

### 4. Configurar variáveis de ambiente
```bash
heroku config:set NODE_ENV=production
heroku config:set NPM_CONFIG_PRODUCTION=false
```

**Importante**: `NPM_CONFIG_PRODUCTION=false` garante que as devDependencies sejam instaladas durante o build (necessário para vite e esbuild)

### 5. Deploy
```bash
git push heroku main
```

Ou se sua branch principal é `master`:
```bash
git push heroku master
```

### 6. Verificar logs
```bash
heroku logs --tail
```

## Configuração Automática

O projeto já está configurado com:
- ✅ **Procfile**: Define o comando `web: npm run start`
- ✅ **Scripts**: `build` e `start` já configurados no package.json
- ✅ **Porta**: Servidor configurado para usar `process.env.PORT`

## Build Automático

O Heroku executará automaticamente:
1. `npm install` - Instala dependências
2. `npm run build` - Compila frontend (Vite) e backend (esbuild)
3. `npm run start` - Inicia o servidor em produção

## Comandos Úteis

```bash
# Ver apps
heroku apps

# Abrir app no navegador
heroku open

# Ver logs em tempo real
heroku logs --tail

# Reiniciar app
heroku restart

# Executar comandos no dyno
heroku run bash
```

## Troubleshooting

Se houver erro de build, verifique:
- Versão do Node.js compatível
- Todas as dependências no package.json
- Logs com `heroku logs --tail`
