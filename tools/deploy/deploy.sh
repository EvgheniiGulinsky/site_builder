#!/bin/bash

# Deploy script for sites

SITE=$1
ENV=${2:-staging}

if [ -z "$SITE" ]; then
  echo "Usage: ./deploy.sh <site-id> [env]"
  echo "Example: ./deploy.sh morevpn-tech production"
  exit 1
fi

echo "🚀 Deploying $SITE to $ENV..."

# TODO: Реализовать деплой
# - Определение изменённых сайтов
# - Запуск тестов
# - Билд
# - Деплой через Vercel CLI
# - Уведомления

echo "⚠️  В разработке."
echo ""
echo "Для деплоя используйте:"
echo "  cd sites/$SITE"
echo "  vercel --prod"


