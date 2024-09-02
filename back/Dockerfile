# ベースイメージとしてPython 3.10を使用
FROM python:3.10
# 出力をバッファリングしないように設定
ENV PYTHONUNBUFFERED 1
# 作業ディレクトリを作成し設定
RUN mkdir /back
WORKDIR /back
# 依存関係のインストール
COPY ./requirements.txt /back/
RUN pip install --upgrade pip && pip install -r requirements.txt
# アプリケーションのソースコードをすべてコピー
COPY . /back/
# ポート8000を開放
EXPOSE 8000
# Django開発サーバーを起動
ENTRYPOINT ["python", "./django_rest_framework_test/manage.py", "runserver", "0.0.0.0:8000"]